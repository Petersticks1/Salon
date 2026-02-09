# Product Requirements Document (PRD)

## Project Title

**Gents Salon & Spa Website**
(Premium Grooming & Appointment Inquiry Platform)

---

## Overview

The **Gents Salon & Spa Website** is a **luxury marketing and appointment inquiry website** designed to position the brand as a **premium men’s grooming and spa destination**.

The website focuses on showcasing services, gallery, unique benefits, brand promise, reviews, and location, while enabling **easy appointment inquiries through call-to-action buttons and contact channels** rather than a full online booking system.

The platform will be built using **HTML, CSS, JavaScript (Vanilla JS)** with **PHP used only for contact and inquiry email handling**.

---

## Goals

* Establish a strong **luxury brand identity**
* Showcase grooming and spa services with detailed descriptions
* Highlight portfolio, ambiance, and real results
* Build trust using reviews and brand promise
* Encourage visitors to **contact or request appointments**
* Provide a clean, mobile-first, high-performance website

---

## Target Users

### Primary Users

* Men aged **20–55**
* Professionals who value grooming and appearance
* Luxury grooming and spa service seekers

### Secondary Users

* First-time visitors comparing salons
* Returning customers checking services, gallery, or opening hours

---

## Core Features

### 1. Homepage

**Purpose:** First impression and brand positioning

**Components:**

* Hero section

  * Headline: *Luxury Grooming for the Modern Gentleman*
  * Subtext emphasizing premium experience
* Primary CTA buttons

  * Book Appointment
  * Explore Our Services
* Services preview

  * Haircuts & Styling
  * Beard Grooming & Sculpting
  * Luxury Shaves & Line-Ups
  * Hair & Scalp Treatments
  * Spa & Relaxation Treatments
  * Grooming Packages
* Gallery preview (real results & ambiance)
* Unique benefits section

  * Skilled professionals
  * Luxurious environment
  * Premium products
  * Personalized consultations
  * Hygiene & comfort
* Reviews & testimonials preview
* Brand promise section
* Opening hours
* Footer (contact info & quick links)

---

### 2. Services Page

**Purpose:** Detailed service presentation

**Features:**

* Service categories with descriptions:

  * Haircuts & Styling (tailored to face shape)
  * Beard Grooming & Sculpting
  * Luxury Shaves & Line-Ups
  * Hair & Scalp Treatments
  * Spa & Relaxation Treatments
  * Complete Grooming Packages
* Each service includes:

  * Short description
  * Value proposition
* CTA buttons:

  * Read More
  * Book Appointment (leads to Contact page)

---

### 3. Appointment Inquiry Flow

**Purpose:** Enable easy booking requests (no online scheduling)

**Approach:**

* CTA buttons redirect users to:

  * Contact form
  * Phone call
  * WhatsApp link (optional)

**Inquiry Form Fields:**

* Full name
* Email address
* Phone number
* Service of interest
* Preferred date/time (optional)
* Message

**Functionality:**

* Client-side validation
* PHP-based email submission
* Confirmation message after submission

---

### 4. Email Handling System

**Purpose:** Notify salon staff of appointment inquiries

**Details:**

* Inquiry details sent to salon email
* Includes customer contact info and requested service

**Implementation:**

* PHP server-side email handling
* Uses `mail()` or SMTP (PHPMailer recommended for production)

---

### 5. Portfolio / Gallery

**Purpose:** Showcase results and environment

**Features:**

* High-resolution images:

  * Haircuts
  * Beard grooming
  * Spa treatments
  * Salon interior
* Layout:

  * Responsive grid or carousel
* Optional lightbox view
* CTA:

  * View Gallery
  * Book Appointment

---

### 6. Reviews & Testimonials

**Purpose:** Build trust and credibility

**Features:**

* Static customer testimonials
* Star ratings display
* Highlighted premium feedback
* Positioned on:

  * Homepage
  * Services page

---

### 7. About Page

**Purpose:** Communicate brand story and values

**Content:**

* Brand story:

  * *Founded to redefine men’s grooming and relaxation*
* Philosophy:

  * Premium quality
  * Professional standards
  * Respect for personal style
  * Relaxing, luxury experience
* Reinforcement of brand promise

---

### 8. Contact Page

**Purpose:** Enable communication and inquiries

**Features:**

* Contact form (PHP email handling)
* Salon address
* Phone number
* Email address
* Opening hours:

  * Mon–Sat: 9AM–8PM
  * Sun: 10AM–6PM
* Embedded location map

---

### 9. Location Map

**Purpose:** Show salon location clearly

**Features:**

* Embedded Google Maps or OpenStreetMap
* Marker showing salon location
* Responsive embed

---

## Non-Functional Requirements

* Fully responsive (mobile-first)
* Fast loading performance
* Luxury black & gold color scheme
* Clean, minimal UI/UX
* Cross-browser compatibility
* Accessible typography and contrast

---

## Technology Stack

* HTML5
* CSS3
* JavaScript (Vanilla)
* PHP (contact & inquiry emails only)
* Google Maps / OpenStreetMap embed

---

## Folder Structure (Base Template)

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

## Out of Scope (Phase 1)

* Online booking calendar
* Payments
* Admin dashboard
* User accounts
* Blog or CMS
* Loyalty programs

---

## Success Metrics

* Click-through rate on “Book Appointment” CTAs
* Time spent on Services and Gallery pages
* Inquiry form submissions
* Mobile usability score
* Page load speed

---

## Approval

This PRD defines the functional and visual scope of the **Gents Salon & Spa Website** and serves as the foundation for design and development.

---


