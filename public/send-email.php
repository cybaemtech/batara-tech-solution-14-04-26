<?php
// Simple Email Handler - No Database
// Place this file in your public folder root

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Get JSON input
$input = json_decode(file_get_contents("php://input"), true);

// Extract form data
$name = isset($input['name']) ? trim($input['name']) : '';
$company = isset($input['company']) ? trim($input['company']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$phone = isset($input['phone']) ? trim($input['phone']) : '';
$clientType = isset($input['clientType']) ? trim($input['clientType']) : 'b2b';
$message = isset($input['message']) ? trim($input['message']) : '';

// Validate
if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["error" => "Name and email required"]);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email"]);
    exit;
}

// Generate ID
$submissionId = date('YmdHis') . substr(md5(uniqid()), 0, 6);

// Email setup
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: no-reply@bataratechnosolutions.com\r\n";
$headers .= "Reply-To: management@bataratechnosolutions.com\r\n";

$adminEmail = "management@bataratechnosolutions.com";
$clientTypeLabel = ($clientType === 'b2b') ? 'B2B / OEM' : 'D2C / Direct';

// Admin email HTML
$adminSubject = "New Contact: " . $name . " (" . strtoupper($clientType) . ")";
$adminHtml = "<html><body style='font-family: Arial; background: #f5f5f5;'>
<div style='max-width: 600px; margin: 20px auto; background: white; padding: 30px; border-radius: 8px;'>
<h2 style='color: #1e40af;'>New Contact Submission</h2>
<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
<p><strong>Company:</strong> " . htmlspecialchars($company) . "</p>
<p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
<p><strong>Type:</strong> " . $clientTypeLabel . "</p>
<p><strong>Message:</strong></p>
<p>" . nl2br(htmlspecialchars($message)) . "</p>
<p><strong>Submission ID:</strong> #" . $submissionId . "</p>
<p><strong>Date:</strong> " . date('Y-m-d H:i:s') . "</p>
</div>
</body></html>";

// User email HTML
$userSubject = "Thank You for Contacting Bata Ra Techno Solutions";
$userHtml = "<html><body style='font-family: Arial; background: #f5f5f5;'>
<div style='max-width: 600px; margin: 20px auto; background: white; padding: 30px; border-radius: 8px;'>
<h2 style='color: #1e40af;'>Thank You, " . htmlspecialchars($name) . "!</h2>
<p>We received your inquiry and will respond within 4 hours.</p>
<p><strong>Your Submission ID:</strong> #" . $submissionId . "</p>
<p>Best regards,<br>Bata Ra Techno Solutions Team</p>
</div>
</body></html>";

// Send emails
$adminSent = @mail($adminEmail, $adminSubject, $adminHtml, $headers);
$userSent = @mail($email, $userSubject, $userHtml, $headers);

if ($adminSent && $userSent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Email sent successfully!",
        "id" => $submissionId
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to send email",
        "id" => $submissionId
    ]);
}
?>
