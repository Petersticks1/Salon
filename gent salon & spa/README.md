# Beauty Salon

Salon booking website built from the template, following the PRD and cursor.md. Branded as **Beauty Salon**.

## Pages

- **index.html** – Home (hero, about, testimonials, services, stylers, working hours, our works, CTA)
- **services.html** – Services list with Book links
- **booking.html** – Appointment form (name, email, phone, service, date, time, notes) → PHP
- **portfolio.html** – Portfolio gallery
- **contact.html** – Contact form (name, email, subject, message) → PHP, plus phone/email/map

## Nav

Home | Services | Book | Portfolio | Contact | Book Appointment → booking.html

## Email (PHP)

- **api/send-booking.php** – Receives booking form POST, validates, emails stylist, returns JSON. Set `$stylist_email` inside the file.
- **api/send-contact.php** – Receives contact form POST, validates, emails salon, returns JSON. Set `$contact_email` inside the file.

Forms are submitted via JavaScript (fetch) and show success/error messages. Requires a server with PHP for the API to work.

## Run locally

```bash
cd beauty-salon
php -S localhost:8000
```

Open http://localhost:8000 (use **index.html** as home; the original template index is the demo picker).

## Assets

All assets (CSS, JS, images, fonts) are in **assets/** from the template. Booking and contact logic are in **assets/js/booking.js** and **assets/js/contact.js**.
