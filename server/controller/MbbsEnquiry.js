import {MbbsIndiaEnquiryForm , MbbsNepalEnquiryForm , MbbsGeorgiaEnquiryForm} from "../models/MbbsEnquiryForm.js";
import asyncHandler from "express-async-handler";
import { sendConsultationNotification, sendClientConfirmation } from "../services/emailService.js";
import googleSheetsService from "../services/googleSheetsService.js";

const createMbbsIndiaEnquiry = asyncHandler(async (req, res) => {
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
        const request = await MbbsIndiaEnquiryForm.create({
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

const createMbbsNepalEnquiry = asyncHandler(async (req, res) => {
    try {
        const { name, phone, email, neetScore } = req.body;
 
        // Validate required fields — mirrors the client form, which only
        // requires name + phone (email/neetScore are optional there)
        if (!name || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Name and phone number are required'
            });
        }
 
        // Create enquiry request
        const request = await MbbsNepalEnquiryForm.create({
            name,
            phone,
            email,
            neetScore,
        });
 
        // Send email notifications
        try {
            // Send notification to admin
            const adminEmailResult = await sendConsultationNotification({
                name,
                email,
                phone,
                interestedCountry: 'Nepal (MBBS)',
            });
 
            // Send confirmation to client
            const clientEmailResult = await sendClientConfirmation({
                name,
                email,
                phone,
                interestedCountry: 'Nepal (MBBS)',
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
                interestedCountry: 'Nepal (MBBS)',
                neetScore,
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
        console.error('Error creating Nepal enquiry:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating enquiry',
            error: error.message
        });
    }
});
const createMbbsGeorgiaEnquiry = asyncHandler(async (req, res) => {
    try {
        const {
            name,
            phone,
            email,
            neetStatus
        } = req.body;

        // Validate required fields
        if (!name || !phone) {
            return res.status(400).json({
                success: false,
                message: "Name and phone number are required"
            });
        }

        // Create enquiry
        const request = await MbbsGeorgiaEnquiryForm.create({
            name,
            phone,
            email,
            neetStatus,
        });

        // Send email notifications
        try {
            // Admin notification
            const adminEmailResult = await sendConsultationNotification({
                name,
                email,
                phone,
                interestedCountry: "Georgia (MBBS)",
            });

            // Client confirmation
            const clientEmailResult = await sendClientConfirmation({
                name,
                email,
                phone,
                interestedCountry: "Georgia (MBBS)",
            });

            console.log("Georgia email notifications sent:", {
                admin: adminEmailResult.success,
                client: clientEmailResult.success
            });

        } catch (emailError) {
            console.error(
                "Georgia email sending failed:",
                emailError
            );
        }

        // Save to Google Sheets
        try {
            const sheetsResult =
                await googleSheetsService.addConsultationEntry({
                    name,
                    email,
                    phone,
                    interestedCountry: "Georgia (MBBS)",
                    neetStatus,
                });

            console.log("Georgia Google Sheets update:", {
                success: sheetsResult.success,
                error: sheetsResult.error
            });

        } catch (sheetsError) {
            console.error(
                "Georgia Google Sheets update failed:",
                sheetsError
            );
        }

        res.status(201).json({
            success: true,
            message:
                "Enquiry submitted successfully. Our counsellor will call you within 24 hours.",
            data: request
        });

    } catch (error) {
        console.error(
            "Error creating Georgia enquiry:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Error creating enquiry",
            error: error.message
        });
    }
});
export {
  createMbbsIndiaEnquiry,
  createMbbsNepalEnquiry,
  createMbbsGeorgiaEnquiry,
};