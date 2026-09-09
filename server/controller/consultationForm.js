
import ConsultationForm from "../models/consultationForm.js";
import ContactUsForm from "../models/contactUsForm.js";
import asyncHandler from "express-async-handler";

import {
    sendConsultationNotification,
    sendClientConfirmation
} from "../services/emailService.js";

import googleSheetsService from "../services/googleSheetsService.js";


// ================================
// CREATE CONSULTATION REQUEST
// ================================

const createConsultationRequest = asyncHandler(async (req, res) => {
    try {
        const { name, phone, interestedCountry } = req.body;

        // Validate required fields
        if (!name || !phone || !interestedCountry) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Save to MongoDB
        const request = await ConsultationForm.create({
            name,
            phone,
            interestedCountry
        });

        // Send admin email
        try {
            const adminEmailResult =
                await sendConsultationNotification({
                    name,
                    phone,
                    interestedCountry
                });

            console.log("Email notifications sent:", {
                admin: adminEmailResult.success
            });

        } catch (emailError) {
            console.error("Email sending failed:", emailError);
        }

        // Save to Google Sheets
        try {
            const sheetsResult =
                await googleSheetsService.addConsultationEntry({
                    name,
                    phone,
                    interestedCountry
                });

            console.log("Google Sheets update:", {
                success: sheetsResult.success,
                error: sheetsResult.error
            });

        } catch (sheetsError) {
            console.error(
                "Google Sheets update failed:",
                sheetsError
            );
        }

        return res.status(201).json({
            success: true,
            message:
                "Consultation request created successfully. We will contact you shortly.",
            data: request
        });

    } catch (error) {
        console.error(
            "Error creating consultation request:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Error creating consultation request",
            error: error.message
        });
    }
});


// ================================
// CREATE CONTACT US REQUEST
// ================================

const createContactUsRequest = asyncHandler(async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            phoneNumber,
            state,
            interest,
            message,
            agreeToContact
        } = req.body;

        // Validate required fields
        if (!firstName || !phoneNumber || !interest) {
            return res.status(400).json({
                success: false,
                message:
                    "First name, phone number and interest are required"
            });
        }

        const name =
            `${firstName} ${lastName || ""}`.trim();

        // Save to MongoDB
        const request = await ContactUsForm.create({
            firstName,
            lastName,
            phoneNumber,
            state,
            interest,
            message,
            agreeToContact
        });

        // Send admin email
        try {
            const adminEmailResult =
                await sendConsultationNotification({
                    name,
                    phone: phoneNumber,
                    interestedCountry: interest
                });

            console.log("Email notifications sent:", {
                admin: adminEmailResult.success
            });

        } catch (emailError) {
            console.error(
                "Email sending failed:",
                emailError
            );
        }

        // Save to Google Sheets
        try {
            const sheetsResult =
                await googleSheetsService.addConsultationEntry({
                    name,
                    phone: phoneNumber,
                    interestedCountry: interest
                });

            console.log("Google Sheets update:", {
                success: sheetsResult.success,
                error: sheetsResult.error
            });

        } catch (sheetsError) {
            console.error(
                "Google Sheets update failed:",
                sheetsError
            );
        }

        return res.status(201).json({
            success: true,
            message:
                "Contact request submitted successfully. We will contact you shortly.",
            data: request
        });

    } catch (error) {
        console.error(
            "Error creating contact request:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Error creating contact request",
            error: error.message
        });
    }
});


// ================================
// TEST GOOGLE SHEETS CONNECTION
// ================================

const testGoogleSheetsConnection =
    asyncHandler(async (req, res) => {

        try {
            const result =
                await googleSheetsService.testConnection();

            if (result.success) {
                return res.status(200).json({
                    success: true,
                    message:
                        "Google Sheets connection successful",
                    data: result
                });
            }

            return res.status(500).json({
                success: false,
                message:
                    "Google Sheets connection failed",
                error: result.error
            });

        } catch (error) {

            console.error(
                "Error testing Google Sheets connection:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Error testing Google Sheets connection",
                error: error.message
            });
        }
    });


// ================================
// SETUP GOOGLE SHEETS HEADERS
// ================================

const setupGoogleSheetsHeaders =
    asyncHandler(async (req, res) => {

        try {
            const result =
                await googleSheetsService.setupSheetHeaders();

            if (result.success) {
                return res.status(200).json({
                    success: true,
                    message:
                        "Google Sheets headers setup successful",
                    data: result
                });
            }

            return res.status(500).json({
                success: false,
                message:
                    "Google Sheets headers setup failed",
                error: result.error
            });

        } catch (error) {

            console.error(
                "Error setting up Google Sheets headers:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Error setting up Google Sheets headers",
                error: error.message
            });
        }
    });


export {
    createConsultationRequest,
    createContactUsRequest,
    testGoogleSheetsConnection,
    setupGoogleSheetsHeaders
};

