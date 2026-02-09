# cursor.md

## Purpose

This document serves as a **personal implementation and development guide**. It explains how to translate the PRD into actual code using HTML, CSS, and JavaScript.

POSTAL = *Personal Operational Steps and Technical Action Log*

---

## 1. Project Setup

### Step 1: Create Project Folder

```
salon-website/
```

### Step 2: Create Required Files

* index.html
* services.html
* booking.html
* portfolio.html
* blog.html
* contact.html
* assets/css/style.css
* assets/js/main.js
* assets/js/booking.js

---

## 2. HTML Structure Guide

### Common Layout (All Pages)

* Header

  * Logo
  * Navigation menu
* Main content
* Footer

Use the same header and footer across all pages for consistency.

---

## 3. Homepage Implementation

### Sections

* Hero section
* About stylist
* Featured services
* Testimonials
* CTA booking button

**Goal:** Convert visitors into customers.

---

## 4. Services Page Logic

* Create service cards using HTML
* Style with CSS grid or flexbox
* Each service includes:

  * Image
  * Title
  * Description
  * Book button

---

## 5. Booking System Implementation

### booking.html

Create a form with:

* Name
* Email
* Phone
* Service
* Date
* Time
* Message

### booking.js

Responsibilities:

* Validate form inputs (client-side)
* Submit form data to PHP endpoint (e.g. `POST` to `send-booking.php`)
* Display success or error message from server response

Example flow:

1. User submits form
2. JavaScript validates
3. Form is submitted to PHP script (server-side)
4. PHP sends booking email to stylist (e.g. via `mail()` or PHPMailer)
5. PHP returns JSON success/error; confirmation message shown

---

## 6. Email Integration (PHP Server-Side)

Steps:

1. Create a PHP script (e.g. `send-booking.php` or `api/send-booking.php`) that:
   * Accepts `POST` data (name, email, phone, service, date, time, notes)
   * Validates/sanitizes input
   * Sends email to stylist using PHP `mail()` or a library such as PHPMailer (recommended for SMTP/reliability)
   * Returns JSON `{ "success": true }` or `{ "success": false, "message": "..." }`
2. Ensure the server has PHP and (if using SMTP) correct mail/SMTP configuration
3. Point the booking form `action` to the PHP script, or use `fetch()`/`XMLHttpRequest` from booking.js to POST and handle the response

This enables stylists to receive booking notifications directly in their email inbox without exposing client-side API keys.

---

## 7. Portfolio Page

* Use image gallery layout
* Store images in assets/images
* Use CSS grid
* Optional lightbox effect with JS

---

## 8. Blog Page

* Static blog cards
* Each blog links to blog detail page
* Content written directly in HTML

Future upgrade: dynamic CMS.

---

## 9. Reviews Section

Implementation options:

* Static testimonials
* Form-based reviews saved temporarily

Fields:

* Name
* Rating
* Comment

Display reviews dynamically using JavaScript.

---

## 10. Contact Page

Includes:

* Contact form
* Phone number
* Email
* Social links

Optional: use the same PHP email endpoint (or a contact-specific script) for contact form messages.

---

## 11. Map Integration

Options:

* Google Maps embed
* OpenStreetMap iframe

Steps:

1. Get salon coordinates
2. Embed map iframe
3. Style container responsively

---

## 12. Styling Guide

* Use consistent colors
* Use modern typography
* Mobile-first design
* Reusable CSS classes

---

## 13. JavaScript Responsibilities

main.js

* Navbar toggle
* Scroll effects
* Animations

booking.js

* Appointment form handling
* Client-side validation
* Submitting form data to PHP endpoint and handling response

---

## 14. Testing Checklist

* Form validation works
* Email received successfully
* Responsive on mobile
* Links functional
* Map loads correctly

---

## 15. Deployment

Options:

* Netlify
* GitHub Pages
* Vercel

Steps:

1. Push to GitHub
2. Connect hosting
3. Deploy

---

## 16. Personal Notes Section

Use this section to document:

* Errors faced
* Fixes applied
* Improvements
* New ideas

---

## End

This cursor.md acts as your personal development handbook for building and maintaining the salon booking website template.
