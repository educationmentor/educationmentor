import ConsultationForm from "../models/consultationForm.js";
import asyncHandler from "express-async-handler";
import { sendConsultationNotification, sendClientConfirmation } from "../services/emailService.js";
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

export { createConsultationRequest };