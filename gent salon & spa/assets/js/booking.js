/**
 * Gents Salon & Spa – booking.js
 * Client-side validation, submit to external API
 */
(function () {
  "use strict";

  var form = document.getElementById("booking-form");
  var formMessage = document.getElementById("form-message");

  if (!form) return;

  // Pre-select service from URL ?service=...
  var params = new URLSearchParams(window.location.search);
  var serviceParam = params.get("service");
  if (serviceParam) {
    var serviceSelect = document.getElementById("service");
    if (serviceSelect) {
      var opt = Array.from(serviceSelect.options).find(function (o) {
        return o.value.toLowerCase() === serviceParam.toLowerCase();
      });
      if (opt) opt.selected = true;
    }
  }

  function showMessage(type, text) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.className =
      "alert alert-" + (type === "success" ? "success" : "danger");
    formMessage.setAttribute("role", "alert");
    formMessage.classList.remove("d-none");
  }

  function clearMessage() {
    if (formMessage) {
      formMessage.textContent = "";
      formMessage.className = "alert d-none";
    }
  }

  function setError(id, message) {
    var errEl = document.getElementById(id + "-error");
    if (errEl) errEl.textContent = message || "";
  }

  function validate() {
    var name = (form.querySelector('[name="name"]') || {}).value || "";
    var email = (form.querySelector('[name="email"]') || {}).value || "";
    var phone = (form.querySelector('[name="phone"]') || {}).value || "";
    var service = (form.querySelector('[name="service"]') || {}).value || "";
    var date = (form.querySelector('[name="date"]') || {}).value || "";
    var time = (form.querySelector('[name="time"]') || {}).value || "";

    setError("name", "");
    setError("email", "");
    setError("phone", "");
    setError("service", "");
    setError("date", "");
    setError("time", "");

    var valid = true;
    if (!name.trim()) {
      setError("name", "Please enter your name.");
      valid = false;
    }
    if (!email.trim()) {
      setError("email", "Please enter your email.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("email", "Please enter a valid email.");
      valid = false;
    }
    if (!phone.trim()) {
      setError("phone", "Please enter your phone number.");
      valid = false;
    }
    if (!service) {
      setError("service", "Please select a service.");
      valid = false;
    }
    if (!date) {
      setError("date", "Please select a date.");
      valid = false;
    }
    if (!time) {
      setError("time", "Please select a time.");
      valid = false;
    }
    return valid;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessage();

    if (!validate()) {
      showMessage("error", "Please fix the errors below and try again.");
      return;
    }

    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    // Collect form data and map to API's expected structure
    var service = form.querySelector('[name="service"]').value;
    var date = form.querySelector('[name="date"]').value;
    var time = form.querySelector('[name="time"]').value;
    var notes = form.querySelector('[name="notes"]').value;

    // Create subject from service, date, and time
    var subject = "Booking Request: " + service;
    if (date && time) {
      subject += " on " + date + " at " + time;
    }

    // Create message from notes and booking details
    var message = "Service: " + service + "\n";
    message += "Preferred Date: " + date + "\n";
    message += "Preferred Time: " + time + "\n";
    if (notes) {
      message += "\nAdditional Notes:\n" + notes;
    }

    var formData = {
      name: form.querySelector('[name="name"]').value,
      email: form.querySelector('[name="email"]').value,
      phone: form.querySelector('[name="phone"]').value,
      subject: subject,
      message: message,
    };

    // Use the external API endpoint
    var apiUrl = "https://demo.altairattic.net/hotel-two/api/contact";

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then(function (res) {
        // Check if response is OK (status 200-299)
        if (!res.ok) {
          // Try to get error message from response
          return res.json().then(
            function (errorData) {
              throw new Error(errorData.message || "Server returned error: " + res.status);
            },
            function () {
              throw new Error("Server returned error: " + res.status);
            }
          );
        }
        return res.json();
      })
      .then(function (data) {
        if (data.success || data.status === "success") {
          showMessage(
            "success",
            "Your booking request has been sent. We'll confirm shortly."
          );
          form.reset();
        } else {
          showMessage(
            "error",
            data.message || "Something went wrong. Please try again."
          );
        }
      })
      .catch(function (error) {
        showMessage(
          "error",
          error.message || "Unable to send. Check your connection or try again later."
        );
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Submit Booking";
        }
      });
  });
})();
