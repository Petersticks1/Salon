/**
 * Beauty Salon – contact.js
 * Contact form validation and submit to PHP
 */
(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  var formMessage = document.getElementById("form-message");

  if (!form) return;

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
    var subject = (form.querySelector('[name="subject"]') || {}).value || "";
    var message = (form.querySelector('[name="message"]') || {}).value || "";

    setError("contact-name", "");
    setError("contact-email", "");
    setError("contact-subject", "");
    setError("contact-message", "");

    var valid = true;
    if (!name.trim()) {
      setError("contact-name", "Please enter your name.");
      valid = false;
    }
    if (!email.trim()) {
      setError("contact-email", "Please enter your email.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("contact-email", "Please enter a valid email.");
      valid = false;
    }
    if (!subject.trim()) {
      setError("contact-subject", "Please enter a subject.");
      valid = false;
    }
    if (!message.trim()) {
      setError("contact-message", "Please enter your message.");
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
    var action = form.getAttribute("action") || "api/send-contact.php";

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
            "Your message has been sent. We’ll get back to you soon.",
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
          submitBtn.textContent = "Submit";
        }
      });
  });
})();
