/**
 * Beauty Salon – booking.js
 * Client-side validation, submit to PHP, show success/error
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

    var formData = new FormData(form);
    var action = form.getAttribute("action") || "api/send-booking.php";

    fetch(action, {
      method: "POST",
      body: formData,
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
      .then(function (res) {
        return res.json().catch(function () {
          return { success: false, message: "Invalid response from server." };
        });
      })
      .then(function (data) {
        if (data.success) {
          showMessage(
            "success",
            "Your booking request has been sent. We’ll confirm shortly.",
          );
          form.reset();
        } else {
          showMessage(
            "error",
            data.message || "Something went wrong. Please try again.",
          );
        }
      })
      .catch(function () {
        showMessage(
          "error",
          "Unable to send. Check your connection or try again later.",
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
