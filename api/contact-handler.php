<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Debug function
function debugLog($message) {
    file_put_contents('contact_debug.log', date('Y-m-d H:i:s') . " - " . $message . "\n", FILE_APPEND);
}

debugLog("=== Contact Form Script Started (Email Only) ===");

// Check if it's JSON or form data
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if (strpos($contentType, 'application/json') !== false) {
    // JSON input
    $raw = file_get_contents("php://input");
    $input = json_decode($raw, true);
    debugLog("JSON input: " . $raw);

    if ($input) {
        $name       = $input['name'] ?? '';
        $company    = $input['company'] ?? '';
        $email      = $input['email'] ?? '';
        $phone      = $input['phone'] ?? '';
        $clientType = $input['clientType'] ?? 'b2b';
        $message    = $input['message'] ?? '';
        $sourcePage = $input['sourcePage'] ?? '';
    } else {
        $name = $company = $email = $phone = $message = $sourcePage = '';
        $clientType = 'b2b';
    }
} else {
    // Form data
    $name       = $_POST['name'] ?? '';
    $company    = $_POST['company'] ?? '';
    $email      = $_POST['email'] ?? '';
    $phone      = $_POST['phone'] ?? '';
    $clientType = $_POST['clientType'] ?? 'b2b';
    $message    = $_POST['message'] ?? '';
    $sourcePage = $_POST['sourcePage'] ?? '';

    debugLog("Form data - Name: $name, Company: $company, Email: $email, Phone: $phone, ClientType: $clientType");
}

// Log the extracted values
debugLog("Extracted values - Name: '$name', Company: '$company', Email: '$email', Phone: '$phone', ClientType: '$clientType', Message: '$message'");

// Validate required fields
if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["error" => "Name and email are required fields"]);
    debugLog("Validation failed - missing required fields");
    exit();
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email address"]);
    debugLog("Validation failed - invalid email format");
    exit();
}

// Generate submission ID (timestamp-based)
$submission_id = date('YmdHis') . substr(md5(microtime()), 0, 8);
debugLog("Generated submission ID: $submission_id");

// Email Headers
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: Bata Ra Techno Solutions <no-reply@bataratechnosolutions.com>\r\n";
$headers .= "Reply-To: management@bataratechnosolutions.com\r\n";

// Admin Email Configuration
$adminEmail   = "management@bataratechnosolutions.com";
$adminSubject = "🚀 New Contact Form Submission - Bata Ra Techno Solutions (" . strtoupper($clientType) . ")";

// Create client type label
$clientTypeLabel = ($clientType === 'b2b') ? 'B2B / OEM' : 'D2C / Direct';

$adminMessage = '
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px;
                 box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 30px; text-align: center; color: white; }
    .header h1 { margin: 0; font-size: 24px; }
    .badge { display: inline-block; background: #fbbf24; color: #000; padding: 6px 12px; border-radius: 20px; margin-top: 10px; font-weight: bold; font-size: 12px; }
    .content { padding: 30px; color: #333333; }
    .content h2 { margin-top: 0; color: #1e40af; font-size: 22px; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    td { padding: 12px 15px; border-bottom: 1px solid #eaeaea; font-size: 15px; }
    td.label { font-weight: 600; color: #1e40af; background: #f9fafb; width: 30%; }
    td.value { color: #333; }
    .footer { background: #f9fafb; padding: 15px; text-align: center; font-size: 13px; color: #666; }
    .footer a { color: #1e40af; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Submission</h1>
      <div class="badge">' . $clientTypeLabel . '</div>
    </div>
    <div class="content">
      <h2>Submission Details</h2>
      <table>
        <tr><td class="label">Name</td><td class="value">' . htmlspecialchars($name) . '</td></tr>
        <tr><td class="label">Company</td><td class="value">' . htmlspecialchars($company) . '</td></tr>
        <tr><td class="label">Email</td><td class="value">' . htmlspecialchars($email) . '</td></tr>
        <tr><td class="label">Phone</td><td class="value">' . htmlspecialchars($phone) . '</td></tr>
        <tr><td class="label">Client Type</td><td class="value">' . $clientTypeLabel . '</td></tr>
        <tr><td class="label">Problem Statement</td><td class="value">' . nl2br(htmlspecialchars($message)) . '</td></tr>
        <tr><td class="label">Source Page</td><td class="value">' . htmlspecialchars($sourcePage) . '</td></tr>
        <tr><td class="label">Submission ID</td><td class="value">#' . $submission_id . '</td></tr>
        <tr><td class="label">Submitted At</td><td class="value">' . date('Y-m-d H:i:s') . '</td></tr>
      </table>
    </div>
    <div class="footer">
      © ' . date("Y") . ' <a href="https://www.bataratechnosolutions.com">Bata Ra Techno Solutions</a> — All Rights Reserved
    </div>
  </div>
</body>
</html>';

// User Thank You Email
$userSubject = "Thank You for Contacting Bata Ra Techno Solutions";
$userMessage = '
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px;
                 box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 30px; text-align: center; color: white; }
    .header h1 { margin: 0; font-size: 28px; }
    .content { padding: 30px; color: #333333; text-align: center; }
    .content p { font-size: 15px; line-height: 1.6; }
    .btn { display: inline-block; margin-top: 20px; padding: 12px 30px; background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
           color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 13px; color: #666; }
    .footer a { color: #1e40af; text-decoration: none; font-weight: 600; }
    .sla { background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; font-weight: 600; color: #1e40af; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You, ' . htmlspecialchars($name) . '!</h1>
    </div>
    <div class="content">
      <p>We have received your inquiry and our engineering team is reviewing your problem statement.</p>
      <div class="sla">
        ⏱️ We will get back to you within <strong>4 hours</strong> with a preliminary assessment.
      </div>
      <p>Your submission ID is <strong>#' . $submission_id . '</strong> — keep this for reference.</p>
      <p>Meanwhile, feel free to explore our services and solutions on our website.</p>
      <a href="https://www.bataratechnosolutions.com" class="btn">Visit Our Website</a>
    </div>
    <div class="footer">
      You received this email because you submitted an inquiry on <a href="https://www.bataratechnosolutions.com">Bata Ra Techno Solutions</a>.<br>
      © ' . date("Y") . ' Bata Ra Techno Solutions. All Rights Reserved.
    </div>
  </div>
</body>
</html>';

// Send emails
$adminMailResult = @mail($adminEmail, $adminSubject, $adminMessage, $headers);
$userMailResult = @mail($email, $userSubject, $userMessage, $headers);

debugLog("Admin email sent to $adminEmail: " . ($adminMailResult ? "Yes" : "No"));
debugLog("User email sent to $email: " . ($userMailResult ? "Yes" : "No"));

if ($adminMailResult && $userMailResult) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Your submission has been received. Check your email for confirmation.",
        "submission_id" => $submission_id
    ]);
    debugLog("Both emails sent successfully");
} else {
    http_response_code(500);
    if (!$adminMailResult) {
        debugLog("ERROR: Failed to send admin email");
    }
    if (!$userMailResult) {
        debugLog("ERROR: Failed to send user email to $email");
    }
    echo json_encode([
        "success" => false,
        "message" => "Form submitted but email sending failed. Contact support.",
        "submission_id" => $submission_id
    ]);
}

debugLog("=== Script Ended ===\n");
?>
