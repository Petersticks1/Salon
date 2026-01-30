<?php
/**
 * Beauty Salon – send-booking.php
 * Accepts booking form POST, validates, sends email to stylist, returns JSON.
 * Set STYLIST_EMAIL to the address that should receive bookings.
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
  exit;
}

$stylist_email = 'stylist@beautysalon.com';

$name    = isset($_POST['name'])    ? trim((string) $_POST['name'])    : '';
$email   = isset($_POST['email'])   ? trim((string) $_POST['email'])   : '';
$phone   = isset($_POST['phone'])   ? trim((string) $_POST['phone'])   : '';
$service = isset($_POST['service']) ? trim((string) $_POST['service']) : '';
$date    = isset($_POST['date'])    ? trim((string) $_POST['date'])    : '';
$time    = isset($_POST['time'])    ? trim((string) $_POST['time'])    : '';
$notes   = isset($_POST['notes'])   ? trim((string) $_POST['notes'])   : '';

$errors = [];
if ($name === '') $errors[] = 'Name is required.';
if ($email === '') $errors[] = 'Email is required.';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Please provide a valid email address.';
if ($phone === '') $errors[] = 'Phone is required.';
if ($service === '') $errors[] = 'Service is required.';
if ($date === '') $errors[] = 'Preferred date is required.';
if ($time === '') $errors[] = 'Preferred time is required.';

if (!empty($errors)) {
  echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
  exit;
}

$subject = 'New Beauty Salon Booking Request';
$body = "A new booking request has been submitted.\n\n";
$body .= "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Phone: " . $phone . "\n";
$body .= "Service: " . $service . "\n";
$body .= "Preferred date: " . $date . "\n";
$body .= "Preferred time: " . $time . "\n";
if ($notes !== '') $body .= "Notes: " . $notes . "\n";
$body .= "\n— Beauty Salon booking form\n";

$headers = [
  'From: ' . $email,
  'Reply-To: ' . $email,
  'X-Mailer: PHP/' . phpversion(),
  'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($stylist_email, $subject, $body, implode("\r\n", $headers));

if ($sent) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'message' => 'Unable to send email. Please try again or contact us by phone.']);
}
