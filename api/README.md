# API Directory - Contact Form Backend

This directory contains the backend infrastructure for the Bata Ra Techno Solutions contact form.

## Files

### 1. **contact-handler.php** (Main Backend)
The core PHP script that handles contact form submissions.

**Features:**
- ✅ Accepts JSON & form data
- ✅ Database validation & insertion
- ✅ Automatic email notifications to `management@bataratechnosolutions.com`
- ✅ User confirmation emails
- ✅ B2B/D2C classification
- ✅ Debug logging
- ✅ CORS enabled
- ✅ SQL injection prevention
- ✅ Input sanitization

**Database Fields Captured:**
```
name, company, email, phone, client_type, message, source_page, created_at
```

### 2. **database-schema.sql**
SQL script to create the required database and tables.

**What it creates:**
- Database: `bataratechno_contact`
- Table: `contact_submissions`
- User: `bataratechno_user`

**To set up:**
1. Copy the SQL content
2. Paste into phpMyAdmin or your database management tool
3. Execute the queries

### 3. **SETUP_GUIDE.md**
Complete setup and deployment guide with:
- Database configuration steps
- Email setup instructions
- Troubleshooting guide
- Security recommendations
- Customization options

### 4. **.htaccess**
Apache server configuration for:
- CORS headers
- Security headers
- PHP configuration
- File access restrictions
- Gzip compression

*Only works if your server runs Apache with .htaccess enabled.*

---

## Quick Deployment Checklist

- [ ] Create database using `database-schema.sql`
- [ ] Create database user with INSERT/SELECT/UPDATE permissions
- [ ] Update database credentials in `contact-handler.php`
- [ ] Upload `contact-handler.php` to `/api/` directory on server
- [ ] Upload `.htaccess` to `/api/` directory (if using Apache)
- [ ] Test form submission
- [ ] Check `contact_debug.log` for errors
- [ ] Verify emails received at `management@bataratechnosolutions.com`

---

## Email Configuration

### Outbound Emails
- **To Admin**: `management@bataratechnosolutions.com`
- **From**: `no-reply@bataratechnosolutions.com`
- **Reply-To**: `management@bataratechnosolutions.com`

Ensure your hosting provider:
1. Has mail() function enabled
2. Allows mail relay on port 25
3. Has proper SPF/DKIM records (optional)

### Email Templates
Both HTML email templates are embedded in `contact-handler.php`:
- Admin notification email (includes all submission details)
- User confirmation email (thank you + SLA info)

Edit the HTML in the PHP file to customize branding/messaging.

---

## Security Notes

✅ **Built-in Protections:**
- Prepared statements (SQL injection prevention)
- HTML escaping (XSS prevention)
- Input validation
- CORS configuration

⚠️ **Recommended Additions:**
```php
// Rate limiting (prevent spam)
// reCAPTCHA integration
// Request throttling
// Admin authentication for dashboard
```

---

## Debug Logging

The system creates a log file: **contact_debug.log**

Check this file for:
```
✓ Database connections
✓ Form data received
✓ Validation results
✓ Email sending status
✓ Errors and warnings
```

Location: Same directory as `contact-handler.php`

Example log entries:
```
2026-04-14 14:30:00 - === Contact Form Script Started ===
2026-04-14 14:30:01 - JSON input: {"name":"John Doe","email":"john@example.com",...}
2026-04-14 14:30:02 - Database insert successful - ID: 42
2026-04-14 14:30:03 - Admin email sent: Yes
2026-04-14 14:30:04 - User email sent: Yes
2026-04-14 14:30:05 - === Script Ended ===
```

---

## Customization Guide

### Change Admin Email (B2B/D2C Split)
```php
// Different emails for different client types
$adminEmail = ($clientType === 'b2b') ? 
    "b2b@bataratechnosolutions.com" : 
    "d2c@bataratechnosolutions.com";
```

### Add Database Fields
1. Modify table schema in `database-schema.sql`
2. Add column to INSERT statement in PHP
3. Add binding parameter (`bind_param`)
4. Update React component to capture field

### Modify Email Templates
Edit the HTML strings in `contact-handler.php`:
- `$adminMessage` - HTML for admin email
- `$userMessage` - HTML for user confirmation email

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Database connection failed" | Check hostname, username, password, database name |
| "Prepare failed" | Verify `contact_submissions` table exists |
| Email not sent | Check with hosting provider; mail() might be disabled |
| CORS errors | Verify `.htaccess` is deployed or server headers are set |
| Form submits but no data | Check `contact_debug.log` for specific error |
| Duplicate submissions | Add rate limiting or unique constraint on email + timestamp |

---

## Testing Endpoints

### Test Database Connection
```bash
curl -X POST http://yourdomain.com/api/contact-handler.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message","clientType":"b2b"}'
```

### Expected Response (Success)
```json
{
  "success": true,
  "message": "Your submission has been received. Check your email for confirmation.",
  "submission_id": 42
}
```

### Expected Response (Error)
```json
{
  "error": "Name and email are required fields"
}
```

---

## Production Checklist

- [ ] Database credentials updated
- [ ] Debug logging disabled or restricted
- [ ] CORS origin restricted to your domain
- [ ] Rate limiting implemented
- [ ] SSL/HTTPS enabled on API endpoint
- [ ] Error messages don't expose system details
- [ ] Database backups configured
- [ ] Email bounce handling configured
- [ ] Admin has access to view submissions
- [ ] Spam/abuse monitoring in place

---

**For detailed setup instructions, see SETUP_GUIDE.md**
