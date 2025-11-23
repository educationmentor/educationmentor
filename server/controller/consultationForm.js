import ConsultationForm from "../models/consultationForm.js";
import ContactUsForm from '../models/contactUsForm.js'
import asyncHandler from "express-async-handler";
import { sendConsultationNotification, sendClientConfirmation } from "../services/emailService.js";
import googleSheetsService from "../services/googleSheetsService.js";
const createConsultationRequest = asyncHandler(async (req, res) => {
    try {
        const { name, email, phone, interestedCountry } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !interestedCountry) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Create consultation request
        const request = await ConsultationForm.create({
            name,
            email,
            phone,
            interestedCountry,
        });

        // Send email notifications
        try {
            // Send notification to admin
            const adminEmailResult = await sendConsultationNotification({
                name,
                email,
                phone,
                interestedCountry
            });

            // Send confirmation to client
            const clientEmailResult = await sendClientConfirmation({
                name,
                email,
                phone,
                interestedCountry
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
                interestedCountry
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
            message: 'Consultation request created successfully. You will receive a confirmation email shortly.',
            data: request
        });
    } catch (error) {
        console.error('Error creating consultation request:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating consultation request',
            error: error.message
            // error: error.message0
        });
    }
});

const createContactUsRequest = asyncHandler(async (req, res) => {
    try {
        const { firstName,lastName, email, phoneNumber, state,city,interest,message,agreeToContact } = req.body;
        const name=firstName+' ' + lastName
    // Validate required fields
        if (!name || !email || !phoneNumber || !interest) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Create consultation request
        const request = await ContactUsForm.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            state,
            city,
            interest,
            message,
            agreeToContact,
        });

        // Send email notifications
        try {
            // Send notification to admin
            const adminEmailResult = await sendConsultationNotification({
                name,
                email,
                phoneNumber,
                interest
            });

            // Send confirmation to client
            const clientEmailResult = await sendClientConfirmation({
                name,
                email,
                phoneNumber,
                interest
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
                phoneNumber,
                interest
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
            message: 'Consultation request created successfully. You will receive a confirmation email shortly.',
            data: request
        });
    } catch (error) {
        console.error('Error creating consultation request:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating consultation request',
            error: error.message
            // error: error.message0
        });
    }
});

// Test Google Sheets connection
const testGoogleSheetsConnection = asyncHandler(async (req, res) => {
    try {
        const result = await googleSheetsService.testConnection();
        
        if (result.success) {
            res.status(200).json({
                success: true,
                message: 'Google Sheets connection successful',
                data: result
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Google Sheets connection failed',
                error: result.error
            });
        }
    } catch (error) {
        console.error('Error testing Google Sheets connection:', error);
        res.status(500).json({
            success: false,
            message: 'Error testing Google Sheets connection',
            error: error.message
        });
    }
});

// Setup Google Sheets headers
const setupGoogleSheetsHeaders = asyncHandler(async (req, res) => {
    try {
        const result = await googleSheetsService.setupSheetHeaders();
        
        if (result.success) {
            res.status(200).json({
                success: true,
                message: 'Google Sheets headers setup successful',
                data: result
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Google Sheets headers setup failed',
                error: result.error
            });
        }
    } catch (error) {
        console.error('Error setting up Google Sheets headers:', error);
        res.status(500).json({
            success: false,
            message: 'Error setting up Google Sheets headers',
            error: error.message
        });
    }
});

export { createConsultationRequest, testGoogleSheetsConnection, setupGoogleSheetsHeaders, createContactUsRequest };