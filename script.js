function validateEmail() {
    // retrieve DOM elements
    var emailInput = document.getElementById('emailInput');
    var emailError = document.getElementById('emailError');
    var formContainer = document.getElementById('formContainer');
    var subscribeContainer = document.getElementById('subscribeContainer');
    var svgPicture = document.getElementById('svgPicture');
    var infoBox = document.getElementById('infoBox');
    var confirmationEmailText = document.getElementById('confirmationEmailText');
    var userEmail = document.getElementById('userEmail');


    // check for missing DOM elements
    if (!emailInput || !emailError || !formContainer || !subscribeContainer || !confirmationEmailText) {
        console.error('One or more elements not found in the DOM.');
        return;
    }

    // validate email format
    var email = emailInput.value.trim();
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var isValidEmail = emailPattern.test(email);
    userEmail.textContent = email;


    // display error message for invalid email format
    if (!isValidEmail) {
        emailError.style.display = 'block';
        console.error('Wrong e-mail.');
    } else {
        subscribeContainer.style.display = 'block';
        infoBox.style.display = 'none';
        svgPicture.style.display = 'none';
        formContainer.style.display = 'none';
        console.error('Success.');
    }
}

function dismissMessage() {
    var subscribeContainer = document.getElementById('subscribeContainer');
    // hides subscribe container
    subscribeContainer.style.display = 'none';
    // when user clicks 'dismiss message' button, it refreshes the page
    window.location.href = 'index.html';
}
