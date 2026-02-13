/**
 * Gents Salon & Spa – contact-form.js
 * Inquiry form validation and submit to external API
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
        var message = (form.querySelector('[name="message"]') || {}).value || "";

        setError("contact-name", "");
        setError("contact-email", "");
        setError("contact-phone", "");
        setError("contact-service", "");
        setError("contact-datetime", "");
        setError("contact-message", "");

        var valid = true;
        if (!name.trim()) {
            setError("contact-name", "Please enter your full name.");
            valid = false;
        }
        if (!email.trim()) {
            setError("contact-email", "Please enter your email.");
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("contact-email", "Please enter a valid email.");
            valid = false;
        }
        if (!phone.trim()) {
            setError("contact-phone", "Please enter your phone number.");
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

        // Collect form data and map to API's expected structure
        var service = form.querySelector('[name="service"]').value;
        var datetime = form.querySelector('[name="datetime"]').value;

        // Create subject from service and datetime
        var subject = service || "General Inquiry";
        if (datetime) {
            subject += " - Preferred time: " + datetime;
        }

        var formData = {
            name: form.querySelector('[name="name"]').value,
            email: form.querySelector('[name="email"]').value,
            phone: form.querySelector('[name="phone"]').value,
            subject: subject,
            message: form.querySelector('[name="message"]').value,
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
                        "Your message has been sent. We'll get back to you soon."
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
                    submitBtn.textContent = "Send Inquiry";
                }
            });
    });
})();