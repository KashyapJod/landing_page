// script.js

// Wait for the HTML document to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.querySelector("form");

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        // You can perform actions with the form data here, like sending it to a server or displaying it on the page.
        // For this example, we'll just display an alert.
        const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        alert("Form submitted with the following data:\n\n" + alertMessage);

        // Clear the form fields after submission
        form.reset();
    });
});
