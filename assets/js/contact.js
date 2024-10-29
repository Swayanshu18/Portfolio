document.addEventListener("DOMContentLoaded", function() {
    // Select the contact form
    const contactForm = document.getElementById("contactForm");

    // Add event listener for form submission
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const fullName = contactForm.elements["fullname"].value;
        const email = contactForm.elements["email"].value;
        const message = contactForm.elements["message"].value;

        // Define parameters for EmailJS
        const templateParams = {
            from_name: fullName,  // Ensure this matches your EmailJS template
            from_email: email,     // Ensure this matches your EmailJS template
            message: message,      // Ensure this matches your EmailJS template
        };

        // Send email using EmailJS
        emailjs.send("service_u9e9vz8", "template_t3mypch", templateParams)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message was sent successfully!");
                contactForm.reset(); // Reset the form after successful submission
            }, function(error) {
                console.error("FAILED...", error);
                alert("There was an error sending your message. Please try again later.");
            });
    });
});
