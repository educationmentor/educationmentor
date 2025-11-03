# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for storing consultation form data.

## Prerequisites

1. A Google Cloud Project
2. Google Sheets API enabled
3. A Google Sheets document created

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note down your Project ID

## Step 2: Enable Google Sheets API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and enable the API

## Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `education-mentor-sheets`
   - Description: `Service account for Education Mentor Google Sheets integration`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Generate Service Account Key

1. In the Credentials page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Choose "JSON" format
6. Download the JSON file and keep it secure

## Step 5: Create a Google Sheets Document

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Education Mentor Consultations" (or any name you prefer)
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)
5. Share the spreadsheet with your service account email (from step 3)
   - Give it "Editor" permissions

## Step 6: Set Up Headers

In your Google Sheets document, add these headers in the first row:
- A1: Timestamp
- B1: Name
- C1: Email
- D1: Phone
- E1: Interested Country

## Step 7: Configure Environment Variables

Add these environment variables to your `.env` file:

```env
# Google Sheets Configuration
GOOGLE_PROJECT_ID=your_project_id_from_step_1
GOOGLE_PRIVATE_KEY_ID=your_private_key_id_from_json
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key from JSON\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your_service_account_email_from_json
GOOGLE_CLIENT_ID=your_client_id_from_json
GOOGLE_SHEETS_ID=your_spreadsheet_id_from_step_5
GOOGLE_SHEETS_RANGE=Sheet1!A:E
```

## Step 8: Test the Integration

You can test the Google Sheets integration by:

1. Starting your server
2. Submitting a consultation form
3. Checking your Google Sheets document for the new entry

## Troubleshooting

### Common Issues:

1. **"Google Sheets not configured" error**
   - Check that all environment variables are set correctly
   - Verify the service account JSON key is properly formatted

2. **"Permission denied" error**
   - Make sure the service account email has access to the spreadsheet
   - Check that the spreadsheet ID is correct

3. **"Invalid credentials" error**
   - Verify the service account key is valid and not expired
   - Check that the Google Sheets API is enabled

### Testing the Connection

You can test the Google Sheets connection by calling the test endpoint (if implemented) or by checking the server logs when a consultation form is submitted.

## Security Notes

- Never commit the service account JSON file to version control
- Keep your environment variables secure
- Regularly rotate your service account keys
- Use environment-specific service accounts for different deployments
