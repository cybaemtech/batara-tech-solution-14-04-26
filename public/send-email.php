<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

$input = json_decode(file_get_contents("php://input"), true);

$name       = isset($input['name'])       ? trim($input['name'])       : '';
$company    = isset($input['company'])    ? trim($input['company'])    : '';
$email      = isset($input['email'])      ? trim($input['email'])      : '';
$phone      = isset($input['phone'])      ? trim($input['phone'])      : '';
$clientType = isset($input['clientType']) ? trim($input['clientType']) : 'b2b';
$message    = isset($input['message'])    ? trim($input['message'])    : '';
$sourcePage = isset($input['sourcePage']) ? trim($input['sourcePage']) : '';

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["error" => "Name and email required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email"]);
    exit;
}

$submissionId = date('YmdHis') . substr(md5(uniqid()), 0, 6);

$isB2B           = ($clientType === 'b2b');
$clientTypeLabel = $isB2B ? 'B2B / OEM' : 'D2C / Direct';
$badgeBg         = $isB2B ? '#1e40af' : '#d97706';
$badgeText       = '#ffffff';
$badgeBorder     = $isB2B ? '#3b82f6' : '#f59e0b';

$adminEmail = "management@bataratechnosolutions.com";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Batara Techno Solutions <no-reply@bataratechnosolutions.com>\r\n";
$headers .= "Reply-To: management@bataratechnosolutions.com\r\n";

/* ─────────────────────────────────────────────
   ADMIN / RECEIVER EMAIL
   ───────────────────────────────────────────── */
$adminSubject = "New Enquiry [" . $clientTypeLabel . "] - " . htmlspecialchars($name) . " | Batara Techno Solutions";

$adminHtml = '<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Enquiry - Batara Techno Solutions</title>
</head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;background-color:#1e293b;border:1px solid #334155;">
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a8a 0%,#1e40af 60%,#2563eb 100%);padding:36px 32px 28px;text-align:center;">
            <p style="margin:0 0 4px;font-size:11px;letter-spacing:3px;color:#93c5fd;text-transform:uppercase;font-weight:600;">Batara Techno Solutions</p>
            <h1 style="margin:0 0 18px;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">New Enquiry Received</h1>
            <span style="display:inline-block;background-color:' . $badgeBg . ';color:' . $badgeText . ';padding:7px 20px;border-radius:20px;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;border:1px solid ' . $badgeBorder . ';">' . $clientTypeLabel . '</span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 24px;font-size:14px;color:#94a3b8;">A new contact form submission has been received. Details are listed below.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #334155;">
              <tr>
                <td style="padding:13px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;width:35%;border-bottom:1px solid #1e293b;">Full Name</td>
                <td style="padding:13px 18px;background:#1e293b;font-size:14px;color:#f1f5f9;border-bottom:1px solid #334155;">' . htmlspecialchars($name) . '</td>
              </tr>
              <tr>
                <td style="padding:13px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #1e293b;">Company</td>
                <td style="padding:13px 18px;background:#1e293b;font-size:14px;color:#f1f5f9;border-bottom:1px solid #334155;">' . (empty($company) ? '<span style="color:#475569;">-</span>' : htmlspecialchars($company)) . '</td>
              </tr>
              <tr>
                <td style="padding:13px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #1e293b;">Email</td>
                <td style="padding:13px 18px;background:#1e293b;font-size:14px;border-bottom:1px solid #334155;"><a href="mailto:' . htmlspecialchars($email) . '" style="color:#38bdf8;text-decoration:none;">' . htmlspecialchars($email) . '</a></td>
              </tr>
              <tr>
                <td style="padding:13px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #1e293b;">Phone / WhatsApp</td>
                <td style="padding:13px 18px;background:#1e293b;font-size:14px;color:#f1f5f9;border-bottom:1px solid #334155;">' . (empty($phone) ? '<span style="color:#475569;">-</span>' : htmlspecialchars($phone)) . '</td>
              </tr>
              <tr>
                <td style="padding:13px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #1e293b;">Client Type</td>
                <td style="padding:13px 18px;background:#1e293b;border-bottom:1px solid #334155;">
                  <span style="display:inline-block;background-color:' . $badgeBg . ';color:#fff;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:700;letter-spacing:1px;">' . $clientTypeLabel . '</span>
                </td>
              </tr>
              <tr>
                <td style="padding:13px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #1e293b;">Source Page</td>
                <td style="padding:13px 18px;background:#1e293b;font-size:14px;color:#f1f5f9;border-bottom:1px solid #334155;">' . (empty($sourcePage) ? '<span style="color:#475569;">-</span>' : htmlspecialchars($sourcePage)) . '</td>
              </tr>
              <tr>
                <td style="padding:13px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #1e293b;">Submission ID</td>
                <td style="padding:13px 18px;background:#1e293b;font-size:14px;color:#f59e0b;font-weight:700;border-bottom:1px solid #334155;">#' . $submissionId . '</td>
              </tr>
              <tr>
                <td style="padding:13px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;">Submitted At</td>
                <td style="padding:13px 18px;background:#1e293b;font-size:14px;color:#f1f5f9;">' . date('d M Y, H:i:s') . ' UTC</td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
              <tr>
                <td style="padding:16px 18px;background:#0f172a;border-radius:8px 8px 0 0;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;border:1px solid #334155;border-bottom:none;">Problem Statement / Engineering Challenge</td>
              </tr>
              <tr>
                <td style="padding:18px;background:#1e293b;border-radius:0 0 8px 8px;font-size:14px;color:#f1f5f9;line-height:1.7;border:1px solid #334155;border-top:none;">' . nl2br(htmlspecialchars($message)) . '</td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
              <tr>
                <td style="padding:14px 18px;background:rgba(30,64,175,0.25);border-left:4px solid #3b82f6;border-radius:0 8px 8px 0;font-size:13px;color:#93c5fd;line-height:1.5;">
                  <strong style="color:#bfdbfe;">SLA Reminder:</strong> Respond within <strong>4 hours</strong> with a preliminary assessment. Approval window: <strong>6 hours</strong>.
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#0f172a;padding:20px 32px;text-align:center;border-top:1px solid #1e293b;">
            <p style="margin:0 0 6px;font-size:12px;color:#475569;">This is an automated notification from the contact portal at</p>
            <a href="https://www.bataratechnosolutions.com" style="font-size:13px;color:#3b82f6;font-weight:600;text-decoration:none;">www.bataratechnosolutions.com</a>
            <p style="margin:10px 0 0;font-size:11px;color:#334155;">&copy; ' . date('Y') . ' Batara Techno Solutions. All Rights Reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>';

/* ─────────────────────────────────────────────
   USER / SENDER CONFIRMATION EMAIL
   ───────────────────────────────────────────── */
$userSubject = "We have Received Your Enquiry - Batara Techno Solutions";

$clientContext = $isB2B
    ? '<p style="margin:0;font-size:14px;color:#94a3b8;line-height:1.6;">As a <strong style="color:#93c5fd;">B2B / OEM</strong> client, our engineering team will review your requirement and reach out with a tailored solution assessment.</p>'
    : '<p style="margin:0;font-size:14px;color:#94a3b8;line-height:1.6;">As a <strong style="color:#fcd34d;">D2C / Direct</strong> client, our team will review your problem statement and connect with you directly for next steps.</p>';

$userHtml = '<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thank You - Batara Techno Solutions</title>
</head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;background-color:#1e293b;border:1px solid #334155;">
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a8a 0%,#1e40af 60%,#2563eb 100%);padding:36px 32px 28px;text-align:center;">
            <p style="margin:0 0 4px;font-size:11px;letter-spacing:3px;color:#93c5fd;text-transform:uppercase;font-weight:600;">Batara Techno Solutions</p>
            <h1 style="margin:0 0 6px;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Thank You, ' . htmlspecialchars($name) . '!</h1>
            <p style="margin:0 0 18px;font-size:14px;color:#bfdbfe;">Your engineering challenge has been received.</p>
            <span style="display:inline-block;background-color:' . $badgeBg . ';color:' . $badgeText . ';padding:7px 20px;border-radius:20px;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;border:1px solid ' . $badgeBorder . ';">' . $clientTypeLabel . '</span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding:16px 18px;background:rgba(30,64,175,0.2);border-left:4px solid ' . $badgeBorder . ';border-radius:0 8px 8px 0;line-height:1.5;">
                  ' . $clientContext . '
                </td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-radius:8px;overflow:hidden;border:1px solid #334155;">
              <tr>
                <td style="padding:20px;background:#0f172a;text-align:center;">
                  <p style="margin:0 0 6px;font-size:28px;">&#9201;</p>
                  <p style="margin:0 0 4px;font-size:18px;font-weight:700;color:#ffffff;">4-Hour Response Guarantee</p>
                  <p style="margin:0;font-size:13px;color:#64748b;">Our engineering team will respond with a preliminary assessment within 4 hours.</p>
                </td>
              </tr>
            </table>
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Your Submission Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #334155;margin-bottom:24px;">
              <tr>
                <td style="padding:12px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #1e293b;width:38%;">Client Type</td>
                <td style="padding:12px 18px;background:#1e293b;border-bottom:1px solid #334155;">
                  <span style="display:inline-block;background-color:' . $badgeBg . ';color:#fff;padding:3px 12px;border-radius:10px;font-size:12px;font-weight:700;letter-spacing:1px;">' . $clientTypeLabel . '</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 18px;background:#0f172a;font-size:12px;font-weight:700;color:#60a5fa;letter-spacing:1px;text-transform:uppercase;">Submitted At</td>
                <td style="padding:12px 18px;background:#1e293b;font-size:14px;color:#f1f5f9;">' . date('d M Y, H:i:s') . ' UTC</td>
              </tr>
            </table>
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;">What Happens Next?</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr><td style="padding:6px 0;">
                <table cellpadding="0" cellspacing="0"><tr>
                  <td style="width:28px;vertical-align:top;padding-top:1px;"><span style="display:inline-block;width:20px;height:20px;background:#1e40af;border-radius:50%;text-align:center;line-height:20px;font-size:11px;font-weight:700;color:#fff;">1</span></td>
                  <td style="font-size:13px;color:#94a3b8;line-height:1.5;padding-left:8px;">Our team reviews your problem statement and requirement.</td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:6px 0;">
                <table cellpadding="0" cellspacing="0"><tr>
                  <td style="width:28px;vertical-align:top;padding-top:1px;"><span style="display:inline-block;width:20px;height:20px;background:#1e40af;border-radius:50%;text-align:center;line-height:20px;font-size:11px;font-weight:700;color:#fff;">2</span></td>
                  <td style="font-size:13px;color:#94a3b8;line-height:1.5;padding-left:8px;">We respond within <strong style="color:#ffffff;">4 hours</strong> with a preliminary engineering assessment.</td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:6px 0;">
                <table cellpadding="0" cellspacing="0"><tr>
                  <td style="width:28px;vertical-align:top;padding-top:1px;"><span style="display:inline-block;width:20px;height:20px;background:#1e40af;border-radius:50%;text-align:center;line-height:20px;font-size:11px;font-weight:700;color:#fff;">3</span></td>
                  <td style="font-size:13px;color:#94a3b8;line-height:1.5;padding-left:8px;">We collaborate to develop the optimal end-to-end solution for you.</td>
                </tr></table>
              </td></tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding:8px 0 0;">
                  <a href="https://bataratechnosolutions.com" style="display:inline-block;padding:14px 36px;background:linear-gradient(135deg,#1e40af,#2563eb);color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:8px;letter-spacing:0.5px;">Explore Our Solutions</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#0f172a;padding:20px 32px;text-align:center;border-top:1px solid #1e293b;">
            <p style="margin:0 0 4px;font-size:12px;color:#475569;">You received this email because you submitted an enquiry on</p>
            <a href="https://bataratechnosolutions.com" style="font-size:13px;color:#3b82f6;font-weight:600;text-decoration:none;">www.bataratechnosolutions.com</a>
            <p style="margin:12px 0 0;font-size:11px;color:#334155;">&copy; ' . date('Y') . ' Batara Techno Solutions. All Rights Reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>';

/* ─────────────────────────────────────────────
   SEND
   ───────────────────────────────────────────── */
$adminSent = @mail($adminEmail, $adminSubject, $adminHtml, $headers);
$userSent  = @mail($email,      $userSubject,  $userHtml,  $headers);

if ($adminSent && $userSent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Email sent successfully!",
        "id"      => $submissionId
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to send email",
        "id"      => $submissionId
    ]);
}
?>
