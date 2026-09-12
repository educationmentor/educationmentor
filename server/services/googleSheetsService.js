import { google } from "googleapis";

class GoogleSheetsService {
  constructor() {
    this.sheets = null;
    this.spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    this.range = process.env.GOOGLE_SHEETS_RANGE || "Sheet1!A:E";
    this.initialized = false;
  }

  // ==========================================
  // INITIALIZE GOOGLE SHEETS
  // ==========================================

  async initializeSheets() {
    if (this.initialized) {
      return;
    }

    try {
      this.spreadsheetId = process.env.GOOGLE_SHEETS_ID;
      this.range = process.env.GOOGLE_SHEETS_RANGE || "Sheet1!A:E";

      if (
        !process.env.GOOGLE_PROJECT_ID ||
        !process.env.GOOGLE_CLIENT_EMAIL ||
        !process.env.GOOGLE_PRIVATE_KEY ||
        !process.env.GOOGLE_SHEETS_ID
      ) {
        console.error(
          "Missing required Google Sheets environment variables"
        );

        this.sheets = null;
        return;
      }

      // Initialize Google Sheets API
      const auth = new google.auth.GoogleAuth({
        credentials: {
          type: "service_account",

          project_id: process.env.GOOGLE_PROJECT_ID,

          private_key_id:
            process.env.GOOGLE_PRIVATE_KEY_ID,

          private_key:
            process.env.GOOGLE_PRIVATE_KEY.replace(
              /\\n/g,
              "\n"
            ),

          client_email:
            process.env.GOOGLE_CLIENT_EMAIL,

          client_id:
            process.env.GOOGLE_CLIENT_ID,

          auth_uri:
            "https://accounts.google.com/o/oauth2/auth",

          token_uri:
            "https://oauth2.googleapis.com/token",

          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",

          client_x509_cert_url:
            `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`
        },

        scopes: [
          "https://www.googleapis.com/auth/spreadsheets"
        ]
      });

      this.sheets = google.sheets({
        version: "v4",
        auth
      });

      this.initialized = true;

      console.log(
        "Google Sheets API initialized successfully"
      );

    } catch (error) {

      console.error(
        "Error initializing Google Sheets API:",
        error
      );

      this.sheets = null;
      this.initialized = false;
    }
  }


  // ==========================================
  // ADD CONSULTATION ENTRY
  // ==========================================

  async addConsultationEntry(consultationData) {
    try {
      await this.initializeSheets();

      if (!this.sheets || !this.spreadsheetId) {
        console.error(
          "Google Sheets not properly configured"
        );

        return {
          success: false,
          error: "Google Sheets not configured"
        };
      }

      const {
        name,
        email,
        phone,
        interestedCountry
      } = consultationData;

      const timestamp = new Date().toISOString();

      const values = [
        [
          timestamp,
          name || "",
          email || "",
          phone || "",
          interestedCountry || ""
        ]
      ];

      const response =
        await this.sheets.spreadsheets.values.append({

          spreadsheetId: this.spreadsheetId,

          range: this.range,

          valueInputOption: "RAW",

          insertDataOption: "INSERT_ROWS",

          resource: {
            values
          }
        });

      console.log(
        "Consultation data added to Google Sheets successfully"
      );

      return {
        success: true,

        updatedRows:
          response.data.updates?.updatedRows || 1,

        spreadsheetId: this.spreadsheetId
      };

    } catch (error) {

      console.error(
        "Error adding consultation data to Google Sheets:",
        error
      );

      return {
        success: false,
        error: error.message
      };
    }
  }


  // ==========================================
  // ADD CONTACT US ENTRY
  // ==========================================

  async addContactUsEntry(contactData) {
    try {
      await this.initializeSheets();

      if (!this.sheets || !this.spreadsheetId) {
        console.error(
          "Google Sheets not properly configured"
        );

        return {
          success: false,
          error: "Google Sheets not configured"
        };
      }

      const {
        firstName,
        lastName,
        phoneNumber,
        state,
        budget,
        interest,
        message,
        agreeToContact
      } = contactData;

      const timestamp = new Date().toISOString();

      const values = [
        [
          timestamp,
          firstName || "",
          lastName || "",
          phoneNumber || "",
          state || "",
          budget || "",
          interest || "",
          message || "",
          agreeToContact ? "Yes" : "No"
        ]
      ];

      // IMPORTANT:
      // Create a sheet/tab named "ContactUs"
      const response =
        await this.sheets.spreadsheets.values.append({

          spreadsheetId: this.spreadsheetId,

          range: "ContactUs!A:I",

          valueInputOption: "RAW",

          insertDataOption: "INSERT_ROWS",

          resource: {
            values
          }
        });

      console.log(
        "Contact Us data added to Google Sheets successfully"
      );

      return {
        success: true,

        updatedRows:
          response.data.updates?.updatedRows || 1,

        spreadsheetId: this.spreadsheetId
      };

    } catch (error) {

      console.error(
        "Error adding Contact Us data to Google Sheets:",
        error
      );

      return {
        success: false,
        error: error.message
      };
    }
  }


  // ==========================================
  // GET CONSULTATION SHEET HEADERS
  // ==========================================

  async getSheetHeaders() {
    try {
      await this.initializeSheets();

      if (!this.sheets || !this.spreadsheetId) {
        return {
          success: false,
          error: "Google Sheets not configured"
        };
      }

      const response =
        await this.sheets.spreadsheets.values.get({

          spreadsheetId: this.spreadsheetId,

          range: "Sheet1!A1:E1"
        });

      const headers =
        response.data.values?.[0] || [];

      return {
        success: true,
        headers
      };

    } catch (error) {

      console.error(
        "Error getting sheet headers:",
        error
      );

      return {
        success: false,
        error: error.message
      };
    }
  }


  // ==========================================
  // SETUP CONSULTATION SHEET HEADERS
  // ==========================================

  async setupSheetHeaders() {
    try {
      await this.initializeSheets();

      if (!this.sheets || !this.spreadsheetId) {
        return {
          success: false,
          error: "Google Sheets not configured"
        };
      }

      const headersResult =
        await this.getSheetHeaders();

      if (
        headersResult.success &&
        headersResult.headers.length > 0
      ) {
        console.log(
          "Consultation headers already exist"
        );

        return {
          success: true,
          message: "Headers already exist"
        };
      }

      const headers = [
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Interested Country"
      ];

      const response =
        await this.sheets.spreadsheets.values.update({

          spreadsheetId: this.spreadsheetId,

          range: "Sheet1!A1:E1",

          valueInputOption: "RAW",

          resource: {
            values: [headers]
          }
        });

      console.log(
        "Consultation headers added successfully"
      );

      return {
        success: true,
        updatedRows: response.data.updatedRows
      };

    } catch (error) {

      console.error(
        "Error setting up consultation headers:",
        error
      );

      return {
        success: false,
        error: error.message
      };
    }
  }


  // ==========================================
  // SETUP CONTACT US SHEET HEADERS
  // ==========================================

  async setupContactUsHeaders() {
    try {
      await this.initializeSheets();

      if (!this.sheets || !this.spreadsheetId) {
        return {
          success: false,
          error: "Google Sheets not configured"
        };
      }

      const headers = [
        "Timestamp",
        "First Name",
        "Last Name",
        "Phone Number",
        "State",
        "Budget",
        "Interest",
        "Message",
        "Agree To Contact"
      ];

      const response =
        await this.sheets.spreadsheets.values.update({

          spreadsheetId: this.spreadsheetId,

          range: "ContactUs!A1:I1",

          valueInputOption: "RAW",

          resource: {
            values: [headers]
          }
        });

      console.log(
        "Contact Us headers added successfully"
      );

      return {
        success: true,
        updatedRows: response.data.updatedRows
      };

    } catch (error) {

      console.error(
        "Error setting up Contact Us headers:",
        error
      );

      return {
        success: false,
        error: error.message
      };
    }
  }


  // ==========================================
  // TEST GOOGLE SHEETS CONNECTION
  // ==========================================

  async testConnection() {
    try {
      await this.initializeSheets();

      if (!this.sheets || !this.spreadsheetId) {
        return {
          success: false,
          error: "Google Sheets not configured"
        };
      }

      const response =
        await this.sheets.spreadsheets.get({

          spreadsheetId: this.spreadsheetId
        });

      console.log(
        "Google Sheets connection test successful"
      );

      return {
        success: true,

        title:
          response.data.properties?.title,

        sheetCount:
          response.data.sheets?.length || 0
      };

    } catch (error) {

      console.error(
        "Google Sheets connection test failed:",
        error
      );

      return {
        success: false,
        error: error.message
      };
    }
  }
}


// ==========================================
// CREATE SINGLETON INSTANCE
// ==========================================

const googleSheetsService =
  new GoogleSheetsService();

export default googleSheetsService;