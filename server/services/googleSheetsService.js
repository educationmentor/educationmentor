import { google } from 'googleapis';

class GoogleSheetsService {
  constructor() {
    this.sheets = null;
    this.spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    this.range = process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A:E';
    this.initialized = false;
  }

  async initializeSheets() {
    if (this.initialized) {
      return;
    }

    try {
      // Update instance variables from environment (in case they weren't loaded during construction)
      this.spreadsheetId = process.env.GOOGLE_SHEETS_ID;
      this.range = process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A:E';
      
      // Check if required environment variables are present
      
      if (!process.env.GOOGLE_PROJECT_ID || !process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEETS_ID) {
        console.error('Missing required Google Sheets environment variables');
        this.sheets = null;
        return;
      }

      // Initialize Google Sheets API with service account credentials
      const auth = new google.auth.GoogleAuth({
        credentials: {
          type: 'service_account',
          project_id: process.env.GOOGLE_PROJECT_ID,
          private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          client_id: process.env.GOOGLE_CLIENT_ID,
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });

      this.sheets = google.sheets({ version: 'v4', auth });
      this.initialized = true;
      console.log('Google Sheets API initialized successfully');
    } catch (error) {
      console.error('Error initializing Google Sheets API:', error);
      this.sheets = null;
      this.initialized = false;
    }
  }

  async addConsultationEntry(consultationData) {
    try {
      await this.initializeSheets();
      
      if (!this.sheets || !this.spreadsheetId) {
        console.error('Google Sheets not properly configured');
        return { success: false, error: 'Google Sheets not configured' };
      }

      const { name, email, phone, interestedCountry } = consultationData;
      const timestamp = new Date().toISOString();

      // Prepare the row data
      const values = [
        [timestamp, name, email, phone, interestedCountry]
      ];

      // Add the data to the sheet
      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: this.range,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: values
        }
      });

      console.log('Data added to Google Sheets successfully');
      return { 
        success: true, 
        updatedRows: response.data.updates?.updatedRows || 1,
        spreadsheetId: this.spreadsheetId
      };

    } catch (error) {
      console.error('Error adding data to Google Sheets:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
  }

  async getSheetHeaders() {
    try {
      await this.initializeSheets();
      
      if (!this.sheets || !this.spreadsheetId) {
        return { success: false, error: 'Google Sheets not configured' };
      }

      // Get the first row to check if headers exist
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A1:E1'
      });

      const headers = response.data.values?.[0] || [];
      return { success: true, headers };
    } catch (error) {
      console.error('Error getting sheet headers:', error);
      return { success: false, error: error.message };
    }
  }

  async setupSheetHeaders() {
    try {
      await this.initializeSheets();
      
      if (!this.sheets || !this.spreadsheetId) {
        return { success: false, error: 'Google Sheets not configured' };
      }

      // Check if headers already exist
      const headersResult = await this.getSheetHeaders();
      if (headersResult.success && headersResult.headers.length > 0) {
        console.log('Headers already exist in the sheet');
        return { success: true, message: 'Headers already exist' };
      }

      // Add headers if they don't exist
      const headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Interested Country'];
      const values = [headers];

      const response = await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A1:E1',
        valueInputOption: 'RAW',
        resource: {
          values: values
        }
      });

      console.log('Headers added to Google Sheets:', response.data);
      return { success: true, updatedRows: response.data.updatedRows };

    } catch (error) {
      console.error('Error setting up sheet headers:', error);
      return { success: false, error: error.message };
    }
  }

  async testConnection() {
    try {
      await this.initializeSheets();
      
      
      if (!this.sheets || !this.spreadsheetId) {
        return { success: false, error: 'Google Sheets not configured' };
      }

      // Try to get sheet metadata
      const response = await this.sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheetId
      });

      console.log('Google Sheets connection test successful');
      return { 
        success: true, 
        title: response.data.properties?.title,
        sheetCount: response.data.sheets?.length || 0
      };

    } catch (error) {
      console.error('Google Sheets connection test failed:', error);
      return { success: false, error: error.message };
    }
  }
}

// Create a singleton instance
const googleSheetsService = new GoogleSheetsService();

export default googleSheetsService;
