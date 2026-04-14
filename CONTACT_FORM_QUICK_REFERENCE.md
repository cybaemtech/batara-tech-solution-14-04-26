# Contact Form Integration - Quick Reference

## What Was Done

✅ **Backend PHP Script** (`contact-handler.php`)
- Handles JSON POST requests from React form
- Validates name & email required fields
- Stores submissions in database
- Sends two emails:
  - **Admin email** → `management@bataratechnosolutions.com`
  - **User email** → Confirmation to submitter
- Tracks B2B vs D2C submissions
- Includes debug logging

✅ **React Component** (`ContactSection.tsx`)
- Added form state management
- Input validation
- Loading states
- Success/error messages
- Form submission to backend
- Respects B2B/D2C selection

✅ **Database Schema** (`database-schema.sql`)
- Creates database: `bataratechno_contact`
- Creates table: `contact_submissions`
- User: `bataratechno_user`

✅ **Security & Configuration**
- `.htaccess` for Apache security
- CORS headers configured
- SQL injection prevention
- XSS protection
- Configuration reference file

---

## Email Setup Summary

| Item | Value |
|------|-------|
| **Admin Email** | management@bataratechnosolutions.com |
| **From Email** | no-reply@bataratechnosolutions.com |
| **Reply-To** | management@bataratechnosolutions.com |
| **Admin Subject** | New Contact Form Submission (B2B/D2C tagged) |
| **User Subject** | Thank You for Contacting... |
| **Template** | Professionally styled HTML emails |

### Important: Choose B2B or D2C Logic
The form captures `clientType` (b2b or d2c). Currently, the same admin email receives all submissions.

**Option 1: Different emails per type** (Edit PHP)
```php
$adminEmail = ($clientType === 'b2b') ? 
    "b2b@bataratechnosolutions.com" : 
    "d2c@bataratechnosolutions.com";
```

**Option 2: Keep single inbox** (Current setup)
All submissions go to `management@bataratechnosolutions.com`

---

## 5-Minute Setup

1. **Create Database**
   - phpMyAdmin: Import `api/database-schema.sql`

2. **Configure PHP**
   - Edit database credentials in `api/contact-handler.php`
   - Lines 22-25 (host, dbname, username, password)

3. **Upload Files**
   - Upload `api/contact-handler.php` to your server
   - Upload `api/.htaccess` (if using Apache)

4. **Test**
   - Fill form on website
   - Check success message
   - Check email inbox (admin + user)
   - Check database for entry

5. **Debug (if needed)**
   - Check `contact_debug.log` on server
   - Verify database connection
   - Check with hosting provider for mail() support

---

## File Structure

```
bts3/
├── api/
│   ├── contact-handler.php       ← Upload this
│   ├── database-schema.sql       ← Copy/paste SQL queries
│   ├── .htaccess                 ← Upload this
│   ├── README.md                 ← Full documentation
│   └── SETUP_GUIDE.md            ← Step-by-step guide
├── src/
│   ├── components/
│   │   └── ContactSection.tsx    ← Already updated
│   └── config/
│       └── contactFormConfig.ts  ← Configuration reference
└── ... (other files)
```

---

## Database Fields Captured

```sql
id              INT (Auto-increment)
name            VARCHAR (Required) ← From form
company         VARCHAR (Optional) ← From form
email           VARCHAR (Required) ← From form
phone           VARCHAR (Optional) ← From form
client_type     ENUM('b2b','d2c') ← From form toggle
message         LONGTEXT (Required) ← From form
source_page     VARCHAR            ← Auto-captured
created_at      TIMESTAMP          ← Auto-captured
read_status     ENUM               ← For admin tracking
notes           LONGTEXT           ← For admin notes
```

---

## Form Data Flow

```
User fills form
    ↓
Validates in React
    ↓
Sends JSON POST to /api/contact-handler.php
    ↓
PHP validates name & email
    ↓
Inserts into database
    ↓
Sends 2 emails (admin + user)
    ↓
Returns success/error response
    ↓
Shows message to user
```

---

## Key Customization Points

### 1. Change Admin Email Recipient
**File**: `api/contact-handler.php` (Line 77)
```php
$adminEmail = "your-email@yourcompany.com";
```

### 2. Change Company Branding
**File**: `api/contact-handler.php` (Multiple locations)
- Search/replace: "Bata Ra Techno Solutions"
- Search/replace: URLs and references

### 3. Change Email Templates
**File**: `api/contact-handler.php`
- `$adminMessage` (around line 87) - Admin email HTML
- `$userMessage` (around line 121) - User email HTML

### 4. Add Custom Fields
1. Update React component to capture field
2. Update PHP `$_POST`/`$input` parsing
3. Update database INSERT statement
4. Update `bind_param` call

### 5. Different Emails for B2B/D2C
```php
// After line 77:
if ($clientType === 'b2b') {
    $adminEmail = "b2b-team@yourcompany.com";
} else {
    $adminEmail = "d2c-team@yourcompany.com";
}
```

---

## Deployment Checklist

- [ ] Database created (`bataratechno_contact`)
- [ ] Table created (`contact_submissions`)
- [ ] Database user created (`bataratechno_user`)
- [ ] Database credentials updated in PHP
- [ ] `contact-handler.php` uploaded to `/api/`
- [ ] `.htaccess` uploaded to `/api/` (optional but recommended)
- [ ] Test form submission works
- [ ] Check debug log for errors
- [ ] Admin email test received
- [ ] User confirmation test received
- [ ] Database entry verified

---

## Troubleshooting

**Form submits silently?**
→ Check browser console Network tab (F12)
→ Look for POST errors
→ Check `contact_debug.log`

**No email received?**
→ Check `contact_debug.log` for email send status
→ Ask hosting provider: is mail() enabled?
→ Check spam folder
→ Verify admin email is correct

**Database error?**
→ Verify credentials in PHP match actual database
→ Run schema SQL again to create table
→ Check user permissions on database

**CORS error?**
→ Ensure `.htaccess` is uploaded
→ Or ask hosting to set CORS headers
→ Check browser console error message

---

## Email Examples

### Admin Email Subject
```
🚀 New Contact Form Submission - Bata Ra Techno Solutions (B2B)
```

### Admin Email Contains
- Name, Company, Email, Phone
- Client Type (B2B/OEM or D2C/Direct)
- Full problem statement
- Source page
- Submission ID
- Timestamp

### User Email Subject
```
Thank You for Contacting Bata Ra Techno Solutions
```

### User Email Contains
- Thank you message
- 4-hour response SLA
- Submission ID for reference
- Company website link

---

## Next Steps

1. **Immediate**: Follow 5-Minute Setup above
2. **Testing**: Submit test form, verify emails
3. **Monitoring**: Check `contact_debug.log` regularly
4. **Customization**: Adjust email templates, add B2B/D2C split if needed
5. **Enhancement**: Add reCAPTCHA, rate limiting, admin dashboard

---

## Files Reference

| File | Purpose | Location |
|------|---------|----------|
| contact-handler.php | Main backend | `/api/` |
| database-schema.sql | DB setup | `/api/` |
| .htaccess | Server security | `/api/` |
| README.md | Full docs | `/api/` |
| SETUP_GUIDE.md | Step-by-step | `/api/` |
| ContactSection.tsx | React form | `/src/components/` |
| contactFormConfig.ts | Config ref | `/src/config/` |

---

**Everything is ready!** Start with Step 1 of the 5-Minute Setup above and reach out if you have questions about any specific part.
