import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send consultation form notification email
export const sendConsultationNotification = async (consultationData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'theeducationalmentor23399@gmail.com',
      subject: 'New Consultation Request - Education Mentor',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Consultation Request
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${consultationData.name}</p>
            <p><strong>Email:</strong> ${consultationData.email}</p>
            <p><strong>Phone:</strong> ${consultationData.phone}</p>
            <p><strong>Interested Country:</strong> ${consultationData.interestedCountry}</p>
          </div>
          
          <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #0369a1; margin-top: 0;">Next Steps:</h4>
            <ul style="color: #0c4a6e;">
              <li>Contact the client within 24 hours</li>
              <li>Schedule a consultation call</li>
              <li>Prepare relevant information about ${consultationData.interestedCountry}</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              This email was sent from the Education Mentor consultation form.
            </p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Consultation notification email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('Error sending consultation notification email:', error);
    return { success: false, error: error.message };
  }
};

// Send confirmation email to client
export const sendClientConfirmation = async (consultationData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: consultationData.email,
      subject: 'Thank you for your consultation request - Education Mentor',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; text-align: center;">Thank You, ${consultationData.name}!</h2>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #1e293b; font-size: 16px;">
              We've received your consultation request and our team will contact you within 24 hours to discuss your education goals for <strong>${consultationData.interestedCountry}</strong>.
            </p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">What happens next?</h3>
            <ol style="color: #475569;">
              <li>Our education consultant will review your request</li>
              <li>We'll contact you within 24 hours</li>
              <li>We'll schedule a free consultation call</li>
              <li>We'll provide personalized guidance for your education journey</li>
            </ol>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #1e293b; color: white; border-radius: 8px;">
            <h4 style="margin-top: 0;">Need immediate assistance?</h4>
            <p>Call us at: <strong>+1 (555) 123-4567</strong></p>
            <p>Email us at: <strong>info@educationmentor.com</strong></p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              Best regards,<br>
              The Education Mentor Team
            </p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Client confirmation email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('Error sending client confirmation email:', error);
    return { success: false, error: error.message };
  }
};

// Test email configuration
export const testEmailConfiguration = async () => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sraj95922@gmail.com',
      subject: 'Email Configuration Test - Education Mentor',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Email Configuration Test</h2>
          <p>This is a test email to verify that the email configuration is working correctly.</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('Error sending test email:', error);
    return { success: false, error: error.message };
  }
};
