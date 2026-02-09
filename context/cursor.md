

# POSTAL.md

**Personal Operational & Technical Action Log**

## Project

**Gents Salon & Spa – Premium Marketing & Appointment Inquiry Website**

---

## 1. Purpose of This Document

This document explains **how to build the Gents Salon & Spa website step-by-step**, translating the PRD into **practical development actions**.

It is written as a **developer guide**, not a client document.

---

## 2. Development Philosophy

* Marketing-first (luxury branding)
* No admin panel
* No online booking system
* Appointment requests via **contact & inquiry forms**
* Mobile-first
* Clean, premium UI (black & gold theme)
* Simple PHP backend only for emails

---

## 3. Project Setup

### 3.1 Folder Structure

Create the following structure:

```
gents-salon-spa/
│
├── index.html
├── about.html
├── services.html
├── gallery.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│
├── php/
│   └── send-inquiry.php
│
├── PRD.md
├── POSTAL.md
└── README.md
```

---

## 4. Global Website Setup

### 4.1 HTML Boilerplate

* Use semantic HTML:

  * `<header>`
  * `<nav>`
  * `<main>`
  * `<section>`
  * `<footer>`
* Keep navigation consistent across all pages
* Include:

  * Meta viewport
  * SEO-friendly title & description

---

### 4.2 Global Styling (CSS)

**Design Direction**

* Primary colors:

  * Black (#000 or near-black)
  * Gold (#C9A24D or similar)
* Typography:

  * Elegant serif or modern sans-serif
* Large spacing
* Minimal shadows
* Premium look

**CSS Structure**

* Reset / base styles
* Typography
* Layout (flexbox & grid)
* Buttons & CTAs
* Page-specific sections
* Media queries (mobile-first)

---

## 5. Page-by-Page Implementation

---

## 5.1 Homepage (`index.html`)

### Sections to Build

1. **Hero Section**

   * Headline: *Luxury Grooming for the Modern Gentleman*
   * Short description
   * CTA buttons:

     * Book Appointment
     * Explore Our Services

2. **Services Preview**

   * Cards or grid layout
   * Show 4–6 key services
   * Each with icon/image + title

3. **Gallery Preview**

   * 3–6 high-quality images
   * CTA: View Gallery

4. **Unique Benefits**

   * List brand advantages
   * Icons recommended

5. **Reviews**

   * Static testimonials
   * Star ratings (CSS-based)

6. **Brand Promise**

   * Short mission statement

7. **Opening Hours**

   * Clearly displayed

---

## 5.2 About Page (`about.html`)

### Content Implementation

* Brand story
* Mission & values
* Reinforce luxury & professionalism
* Minimal imagery
* Emphasize trust and experience

---

## 5.3 Services Page (`services.html`)

### Structure

* Page hero title
* Service sections:

  * Haircuts & Styling
  * Beard Grooming & Sculpting
  * Luxury Shaves & Line-Ups
  * Hair & Scalp Treatments
  * Spa & Relaxation
  * Grooming Packages

### Each Service Includes

* Name
* Description
* Value proposition
* CTA button:

  * “Book Appointment” → links to Contact page

---

## 5.4 Gallery Page (`gallery.html`)

### Implementation

* Grid or masonry layout
* High-resolution images
* Optional JS lightbox
* Lazy loading for performance
* CTA at bottom: Book Appointment

---

## 5.5 Contact Page (`contact.html`)

### Contact Info Section

* Address
* Phone number
* Email
* Opening hours

### Inquiry Form Fields

* Full Name
* Email
* Phone
* Service of Interest
* Preferred Date/Time (optional)
* Message

### CTA

* “Send Inquiry”

---

## 6. JavaScript (`main.js`)

### Responsibilities

* Mobile menu toggle
* Basic form validation
* UI interactions (hover effects, animations)
* Optional gallery lightbox logic

⚠️ No heavy JS frameworks.

---

## 7. PHP Email Handling

### File: `php/send-inquiry.php`

### Responsibilities

* Receive POST form data
* Sanitize inputs
* Send email to salon email address
* Return success or error response

### Flow

1. User submits form
2. Data sent via POST to `send-inquiry.php`
3. PHP sends email
4. User sees success message

### Recommendation

* Use **PHPMailer + SMTP** for production hosting
* Use `mail()` only for local testing

---

## 8. Map Integration

### Implementation

* Use Google Maps or OpenStreetMap embed
* Place map on Contact page
* Responsive iframe

---

## 9. Responsiveness & Testing

### Test On:

* Mobile phones
* Tablets
* Desktop

### Checklist

* Navigation works on mobile
* CTAs are visible and clickable
* Forms submit correctly
* Images optimized
* Fast loading speed

---

## 10. Deployment

### Hosting Requirements

* PHP-enabled hosting
* Email sending support
* SSL certificate

### Steps

1. Upload files via FTP / Git
2. Configure email in PHP
3. Test inquiry form
4. Final QA

---

## 11. Phase 2 (Optional – Not Implemented)

* Admin dashboard
* Online booking calendar
* Payments
* Blog
* CMS

---

## 12. Final Notes

This POSTAL acts as:

* A **personal development guide**
* A **repeatable template**
* A **reference for future salon projects**

---
