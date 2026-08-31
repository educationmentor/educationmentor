import MbbsEnquiryForm from "../models/MbbsEnquiryForm.js";
import asyncHandler from "express-async-handler";
import { sendConsultationNotification, sendClientConfirmation } from "../services/emailService.js";
import googleSheetsService from "../services/googleSheetsService.js";

const createMbbsEnquiry = asyncHandler(async (req, res) => {
    try {
        const { name, phone, email, neetScore, state } = req.body;

        // Validate required fields — mirrors the client form, which only
        // requires name + phone (email/neetScore/state are optional there)
        if (!name || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Name and phone number are required'
            });
        }

        // Create enquiry request
        const request = await MbbsEnquiryForm.create({
            name,
            phone,
            email,
            neetScore,
            preferredState: state,
        });

        // Send email notifications
        try {
            // Send notification to admin
            const adminEmailResult = await sendConsultationNotification({
                name,
                email,
                phone,
                interestedCountry: 'India (MBBS)',
            });

            // Send confirmation to client
            const clientEmailResult = await sendClientConfirmation({
                name,
                email,
                phone,
                interestedCountry: 'India (MBBS)',
            });

            console.log('Email notifications sent:', {
                admin: adminEmailResult.success,
                client: clientEmailResult.success
            });

        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Don't fail the request if email fails
        }

        // Save to Google Sheets (separate try-catch to ensure it doesn't interfere with email)
        try {
            const sheetsResult = await googleSheetsService.addConsultationEntry({
                name,
                email,
                phone,
                interestedCountry: 'India (MBBS)',
                neetScore,
                preferredState: state,
            });

            console.log('Google Sheets update:', {
                success: sheetsResult.success,
                error: sheetsResult.error
            });

        } catch (sheetsError) {
            console.error('Google Sheets update failed:', sheetsError);
            // Don't fail the request if Google Sheets fails
        }

        res.status(201).json({
            success: true,
            message: 'Enquiry submitted successfully. Our counsellor will call you within 24 hours.',
            data: request
        });
    } catch (error) {
        console.error('Error creating MBBS enquiry:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating enquiry',
            error: error.message
        });
    }
});

export { createMbbsEnquiry };