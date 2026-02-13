<?php
/**
 * Gents Salon & Spa – send-inquiry.php
 * Accepts inquiry form POST (Full Name, Email, Phone, Service of Interest, Preferred Date/Time optional, Message).
 * Validates, sends email, returns JSON. Set CONTACT_EMAIL to the address that should receive inquiries.
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
  exit;
}

$contact_email = 'hello@altair-attic.com';

$name     = isset($_POST['name'])     ? trim(strip_tags((string) $_POST['name']))     : '';
$email    = isset($_POST['email'])    ? trim((string) $_POST['email'])               : '';
$phone    = isset($_POST['phone'])    ? trim(strip_tags((string) $_POST['phone']))   : '';
$service  = isset($_POST['service'])  ? trim(strip_tags((string) $_POST['service'])) : '';
$datetime = isset($_POST['datetime']) ? trim(strip_tags((string) $_POST['datetime'])) : '';
$message  = isset($_POST['message'])  ? trim(strip_tags((string) $_POST['message'])) : '';

$max_name    = 200;
$max_phone   = 50;
$max_service = 200;
$max_datetime = 100;
$max_message = 5000;

$errors = [];
if ($name === '') {
  $errors[] = 'Full name is required.';
} elseif (mb_strlen($name) > $max_name) {
  $errors[] = 'Name is too long.';
}
if ($email === '') {
  $errors[] = 'Email is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $errors[] = 'Please provide a valid email address.';
} elseif (mb_strlen($email) > 254) {
  $errors[] = 'Email is too long.';
}
if ($phone === '') {
  $errors[] = 'Phone is required.';
} elseif (mb_strlen($phone) > $max_phone) {
  $errors[] = 'Phone is too long.';
}
if (mb_strlen($service) > $max_service) {
  $errors[] = 'Service of interest is too long.';
}
if (mb_strlen($datetime) > $max_datetime) {
  $errors[] = 'Preferred date/time is too long.';
}
if ($message === '') {
  $errors[] = 'Message is required.';
} elseif (mb_strlen($message) > $max_message) {
  $errors[] = 'Message is too long.';
}

if (!empty($errors)) {
  echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
  exit;
}

$email_subject = 'Gents Salon & Spa – Appointment Inquiry from ' . $name;
$body = "Full Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Phone: " . $phone . "\n";
$body .= "Service of Interest: " . ($service !== '' ? $service : '(not specified)') . "\n";
$body .= "Preferred Date/Time: " . ($datetime !== '' ? $datetime : '(not specified)') . "\n\n";
$body .= "Message:\n" . $message . "\n\n";
$body .= "— Gents Salon & Spa inquiry form\n";

$headers = [
  'From: ' . $email,
  'Reply-To: ' . $email,
  'X-Mailer: PHP/' . phpversion(),
  'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($contact_email, $email_subject, $body, implode("\r\n", $headers));

if ($sent) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'message' => 'Unable to send inquiry. Please try again or call us.']);
}
