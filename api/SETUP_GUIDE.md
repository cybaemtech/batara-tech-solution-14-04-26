# Contact Form Integration Setup Guide

## Overview
This guide explains how to set up the contact form backend for Bata Ra Techno Solutions. The system will collect B2B/D2C inquiries and automatically send:
- **Admin Email**: `management@bataratechnosolutions.com` (receives all submissions)
- **User Email**: Confirmation to the person who submitted

---

## Quick Setup (5 Steps)

### Step 1: Database Setup
1. Access your hosting cPanel or database management tool (phpMyAdmin)
2. Create a new database: `bataratechno_contact`
3. Run the SQL queries from `api/database-schema.sql`:
   ```sql
   CREATE DATABASE IF NOT EXISTS bataratechno_contact;
   USE bataratechno_contact;

   CREATE TABLE IF NOT EXISTS contact_submissions (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       company VARCHAR(255),
       email VARCHAR(255) NOT NULL,
       phone VARCHAR(20),
       client_type ENUM('b2b', 'd2c') DEFAULT 'b2b',
       message LONGTEXT,
       source_page VARCHAR(255),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       read_status ENUM('unread', 'read') DEFAULT 'unread',
       notes LONGTEXT,
       INDEX (created_at),
       INDEX (client_type),
       INDEX (email)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
   ```

### Step 2: Create Database User
In phpMyAdmin or your hosting control panel:
1. Create new user: `bataratechno_user`
2. Password: `BataraTechno@2025` (or change and update in PHP file)
3. Grant permissions: SELECT, INSERT, UPDATE, DELETE on `bataratechno_contact.*`

### Step 3: Database Configuration
Update `api/contact-handler.php` with your database credentials:
```php
$host = "localhost";        // Usually localhost
$dbname = "bataratechno_contact";     // Database name
$username = "bataratechno_user";      // Database user
$password = "BataraTechno@2025";      // Database password
```

### Step 4: Email Configuration
The PHP file is pre-configured to send emails to:
- **Admin**: `management@bataratechnosolutions.com`
- **From**: `no-reply@bataratechnosolutions.com`
- **Reply-To**: `management@bataratechnosolutions.com`

**Ensure your hosting account has mail() function enabled** (most shared hosting does).

To verify email works, check:
- Your hosting provider's mail relay settings
- Disabled firewall rules blocking port 25
- SPF/DKIM records (optional but recommended)

### Step 5: Deploy Files
1. Upload `api/contact-handler.php` to your web server's `/api/` directory
2. Ensure the file is accessible at: `https://yourdomain.com/api/contact-handler.php`
3. The React component is already configured to POST to this endpoint

---

## Form Fields & Submission Data

### Frontend (React Component)
The form collects:
- **Full Name** (required)
- **Company Name** (optional)
- **Email** (required)
- **Phone / WhatsApp** (optional)
- **Client Type**: B2B / OEM or D2C / Direct (user selects)
- **Problem Statement** (required)
- **Source Page** (automatically captured)

### Database Fields
```
id              → Auto-increment submission ID
name            → Customer name
company         → Company name
email           → Customer email
phone           → Phone number
client_type     → 'b2b' or 'd2c'
message         → Problem statement
source_page     → Page where form was submitted
created_at      → Timestamp of submission
read_status     → 'unread' or 'read' (for tracking)
notes           → Admin notes (manual entry)
```

---

## Email Templates

### Admin Email (management@bataratechnosolutions.com)
- **Subject**: "🚀 New Contact Form Submission - Bata Ra Techno Solutions (B2B)" or "(D2C)"
- **Content**: Professionally formatted HTML with all submission details
- **Badge**: Displays whether it's B2B/OEM or D2C/Direct

### User Confirmation Email
- **Subject**: "Thank You for Contacting Bata Ra Techno Solutions"
- **Content**: Thank you message with submission ID and 4-hour SLA
- **Link**: Button to visit website

---

## Error Handling & Logging

The system creates a debug log file: `contact_debug.log`

Check this file for:
- Connection errors
- Validation failures
- Email sending status
- Database operation status

Log entry example:
```
2026-04-14 14:30:45 - Database insert successful - ID: 42
2026-04-14 14:30:46 - Admin email sent to management@bataratechnosolutions.com: Yes
```

---

## Security Considerations

✅ **Active Protections:**
- Input sanitization with `htmlspecialchars()`
- SQL injection prevention with prepared statements
- Line breaks in message preserved with `nl2br()`
- CORS headers enabled (allow all origins)
- Preflight OPTIONS request handling

⚠️ **Additional Recommendations:**
1. Add rate limiting (max 10 submissions per IP per hour)
2. Enable reCAPTCHA v3 on frontend
3. Implement CSRF tokens if needed
4. Monitor `contact_debug.log` for suspicious activity
5. Set up automated database backups

---

## Testing the Form

### Local Testing (Development)
If testing locally with Vite:
```bash
npm run dev
```

The frontend will try to POST to `/api/contact-handler.php`. 
For local testing, you'll need:
- Local PHP server running
- Local database (XAMPP, MAMP, etc.)

### Production Testing
1. Fill the form with test data
2. Click "Submit"
3. Check:
   - Success message appears on page
   - Check your inbox for admin email
   - Check submitted email address for confirmation email
   - Verify data appears in database

### Troubleshooting

**Form doesn't submit?**
- Open browser console (F12 → Network tab)
- Check if POST request to `/api/contact-handler.php` returns 200 status
- Look for CORS errors

**Email not received?**
- Check `contact_debug.log` for email sending status
- Verify email in database was saved
- Check spam folder
- Check with your hosting provider about their mail relay

**Database errors?**
- Verify database credentials in PHP file match your actual setup
- Check user permissions on the database
- Ensure table `contact_submissions` exists

---

## Admin Dashboard (Optional)

To view submissions, you can create a simple admin panel:

**SQL Query to view all submissions:**
```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;
```

**Mark as read:**
```sql
UPDATE contact_submissions SET read_status = 'read' WHERE id = 42;
```

---

## Customization

### Change Admin Email
Edit in `api/contact-handler.php`:
```php
$adminEmail = "management@bataratechnosolutions.com";
```

### Add More Email Recipients (B2B vs D2C)
**For different emails based on client type:**
```php
$adminEmail = ($clientType === 'b2b') ? 
    "b2b@bataratechnosolutions.com" : 
    "d2c@bataratechnosolutions.com";
```

### Customize Email Templates
Both HTML email templates are in the PHP file:
- `$adminMessage` → Email to admin
- `$userMessage` → Email to user

Edit styling, copy, branding, or links as needed.

---

## Support & Maintenance

- **Email sending issues?** Usually hosting provider related
- **Database connection?** Check credentials and user permissions
- **Form not working?** Check browser console and `contact_debug.log`
- **Need to add fields?** Update React component, PHP validation, and database schema

---

## File Locations

```
bts3/
├── api/
│   ├── contact-handler.php          ← Main backend
│   ├── database-schema.sql          ← Database setup
│   └── SETUP_GUIDE.md               ← This file
├── src/
│   └── components/
│       └── ContactSection.tsx        ← Updated React component
└── ...
```

---

**Configuration Complete!** Your contact form is ready to receive submissions at management@bataratechnosolutions.com.
