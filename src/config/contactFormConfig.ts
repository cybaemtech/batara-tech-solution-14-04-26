// Contact Form Configuration Reference
// This file documents all configuration points in the system

export const CONTACT_FORM_CONFIG = {
  // API Endpoint
  API_ENDPOINT: "/api/contact-handler.php",

  // Email Configuration
  ADMIN_EMAIL: "management@bataratechnosolutions.com",
  FROM_EMAIL: "no-reply@bataratechnosolutions.com",
  REPLY_TO_EMAIL: "management@bataratechnosolutions.com",
  
  // Company Details
  COMPANY_NAME: "Bata Ra Techno Solutions",
  WEBSITE_URL: "https://www.bataratechnosolutions.com",
  
  // SLA (Service Level Agreement)
  RESPONSE_SLA_HOURS: 4,
  APPROVAL_WINDOW_HOURS: 6,

  // Form Validation
  REQUIRED_FIELDS: ["name", "email", "message"],
  OPTIONAL_FIELDS: ["company", "phone"],

  // Client Types
  CLIENT_TYPES: {
    B2B: "b2b",
    D2C: "d2c",
  },

  // Success/Error Messages
  MESSAGES: {
    SUCCESS: "Your submission has been received. Check your email for confirmation.",
    VALIDATION_REQUIRED: "Name and email are required",
    INVALID_EMAIL: "Please enter a valid email address",
    SUBMISSION_ERROR: "An error occurred. Please try again.",
  },

  // Database Configuration (PHP side - contact-handler.php)
  DATABASE: {
    HOST: "localhost",
    NAME: "bataratechno_contact",
    USER: "bataratechno_user",
    PASSWORD: "BataraTechno@2025", // CHANGE THIS PASSWORD IN PRODUCTION!
    TABLE: "contact_submissions",
  },

  // Debug Settings
  DEBUG: {
    LOG_FILE: "contact_debug.log",
    LOG_ENABLED: true,
  },
};

// Usage in React:
// import { CONTACT_FORM_CONFIG } from './config';
// const response = await fetch(CONTACT_FORM_CONFIG.API_ENDPOINT, {...});
