<?php
/**
 * Beauty Salon – send-contact.php
 * Accepts contact form POST, validates, sends email, returns JSON.
 * Set CONTACT_EMAIL to the address that should receive messages.
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
  exit;
}

$contact_email = 'hello@altair-attic.com';

// Get and sanitize: strip HTML/scripts, trim
$name    = isset($_POST['name'])    ? trim(strip_tags((string) $_POST['name']))    : '';
$email   = isset($_POST['email'])   ? trim((string) $_POST['email'])               : '';
$subject = isset($_POST['subject']) ? trim(strip_tags((string) $_POST['subject'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags((string) $_POST['message'])) : '';

// Length limits (validate)
$max_name    = 200;
$max_subject = 200;
$max_message = 5000;

$errors = [];
if ($name === '') {
  $errors[] = 'Name is required.';
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
if ($subject === '') {
  $errors[] = 'Subject is required.';
} elseif (mb_strlen($subject) > $max_subject) {
  $errors[] = 'Subject is too long.';
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

$email_subject = 'Beauty Salon contact: ' . $subject;
$body = "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n\n";
$body .= "Message:\n" . $message . "\n\n";
$body .= "— Beauty Salon contact form\n";

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
  echo json_encode(['success' => false, 'message' => 'Unable to send message. Please try again or call us.']);
}
