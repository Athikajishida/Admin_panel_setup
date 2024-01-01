document.addEventListener("DOMContentLoaded", function () {
    var successAlert = document.getElementById("success-alert");
    var errorAlert = document.getElementById("error-alert");

    // Show/hide alerts after a certain delay
    if (successAlert && successAlert.innerHTML.trim() !== "") {
        setTimeout(function () {
            successAlert.style.display = "none";
        }, 5000); // Hide success alert after 5 seconds
    }

    if (errorAlert && errorAlert.innerHTML.trim() !== "") {
        setTimeout(function () {
            errorAlert.style.display = "none";
        }, 5000); // Hide error alert after 5 seconds
    }

    function validateEmail(input) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;
    
        if (input.value.match(validRegex)) {
            // You can perform additional actions for valid email here
            return true;
        } else {
            // You can customize the validation feedback here
            alert("Invalid email address!");
            input.focus();
            return false;
        }
    }
    

    // Attach the email validation to all email input fields
    var emailInputs = document.querySelectorAll('input[type="email"]');

    emailInputs.forEach(function (emailInput) {
        emailInput.addEventListener("blur", function () {
            if (!validateEmail(this)) {
                alert("Invalid email address!"); // You can customize the validation feedback here
            }
        });
    });
});
