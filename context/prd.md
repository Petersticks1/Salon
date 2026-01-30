# Product Requirements Document (PRD)

## Project Title

Salon Booking Website (Stylist Appointment Platform)

## Overview

The Salon Booking Website is a web-based platform designed for hair stylists and salon owners to showcase their services, manage appointments, receive booking notifications via email, display portfolios, publish blog content, collect customer reviews, and show their business location on a map.

The platform will be built using **HTML, CSS, and JavaScript (Vanilla JS)** and will serve as a reusable base template for salon-related websites.

---

## Goals

* Allow customers to book salon appointments online
* Automatically send booking details to stylists via email
* Provide a professional online presence for stylists
* Enable customers to view services, portfolio, and reviews
* Display salon location using an interactive map
* Provide a scalable base template for future enhancements

---

## Target Users

* Salon owners
* Independent hair stylists
* Barbers
* Customers seeking salon services

---

## Core Features

### 1. Homepage

**Purpose:** First impression and navigation hub

**Components:**

* Hero section (headline + CTA button)
* About the salon/stylist
* Featured services
* Call-to-action for booking
* Testimonials preview
* Footer

---

### 2. Services Page

**Purpose:** Display all salon services

**Features:**

* List of services (haircut, braiding, coloring, treatment, etc.)
* Pricing (optional)
* Service description
* Book Now button

---

### 3. Appointment Booking System

**Purpose:** Allow customers to book appointments

**Booking Form Fields:**

* Full name
* Email address
* Phone number
* Selected service
* Preferred date
* Preferred time
* Additional notes

**Functionality:**

* Form validation
* Email notification sent to stylist
* Booking confirmation message

---

### 4. Email Notification System

**Purpose:** Notify stylists of new bookings

**Details:**

* Booking details sent to stylist email
* Includes customer name, service, date, and time

**Implementation:**

* PHP (server-side email handling) — form submits to a PHP script that sends mail via `mail()` or SMTP (e.g. PHPMailer)

---

### 5. Portfolio / Gallery

**Purpose:** Showcase stylist work

**Features:**

* Image gallery
* Before & after photos
* Responsive grid layout
* Lightbox preview

---

### 6. Blog Section

**Purpose:** Share updates, tips, and promotions

**Features:**

* Blog listing page
* Blog detail page
* Static blog posts (HTML-based)
* Categories (optional)

---

### 7. Reviews & Ratings

**Purpose:** Build trust

**Features:**

* Customer reviews section
* Star ratings
* Static or form-based reviews
* Display recent reviews

---

### 8. Contact Us Page

**Purpose:** Allow communication

**Features:**

* Contact form
* Email address
* Phone number
* Social media links
* Business hours

---

### 9. Location Map

**Purpose:** Show stylist or salon location

**Features:**

* Google Maps or OpenStreetMap
* Embedded map
* Marker showing salon location

---

## Non-Functional Requirements

* Fully responsive design
* Mobile-first layout
* Cross-browser compatibility
* Fast loading performance
* Clean UI/UX

---

## Technology Stack

* HTML5
* CSS3
* JavaScript (Vanilla)
* PHP (server-side email handling for booking and contact forms)
* Google Maps / OpenStreetMap

---

## Folder Structure (Base Template)

```
salon-website/
│
├── index.html
├── services.html
├── booking.html
├── portfolio.html
├── blog.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── booking.js
│   └── images/
│
├── api/                    (or php/ — server-side email)
│   ├── send-booking.php    (handles booking form POST, sends email)
│   └── send-contact.php    (optional: contact form)
│
├── PRD.md
├── POSTAL.md
└── README.md
```

---

## Future Enhancements

* Admin dashboard
* Booking calendar system
* Payment integration
* User authentication
* Backend (Node.js / PHP)

---

## Success Metrics

* Successful appointment submission
* Email delivery confirmation
* User engagement on services and portfolio
* Mobile usability score

---

## Approval

This PRD serves as the foundational specification for building the Salon Booking Website template.
