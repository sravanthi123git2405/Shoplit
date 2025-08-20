let myFormE2 = document.getElementById("myFormE2");

let emailInput = document.getElementById("emailinputsignup");
let emailError = document.getElementById("emailerrormsgsignup");

let passwordInput = document.getElementById("passwordinputsignup");
let passwordError = document.getElementById("passworderrormsgsignup");

let genderRadios = document.getElementsByName("Gender");
let genderError = document.getElementById("radioerrormsg");

let phoneInput = document.getElementById("phoneId");
let phoneError = document.getElementById("phoneError");
let createaccounterror=document.getElementById("createaccounterror");

// Email blur validation
emailInput.addEventListener("blur", function() {
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Required*";
        emailError.style.color = "red";
    } else {
        emailError.textContent = "";
    }
});

// Password blur validation
passwordInput.addEventListener("blur", function() {
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Required*";
        passwordError.style.color = "red";
    } else {
        passwordError.textContent = "";
    }
});

// Phone blur validation
phoneInput.addEventListener("blur", function() {
    let phoneValue = phoneInput.value.trim();
    if (phoneValue === "") {
        phoneError.textContent = "Required*";
        phoneError.style.color = "red";
    } else if (phoneValue.length !== 10 || isNaN(phoneValue)) {
        phoneError.textContent = "Phone number must be exactly 10 digits";
        phoneError.style.color = "red";
    } else {
        phoneError.textContent = "";
    }
});

// Form submit validation - this ensures all errors stay after submit click
myFormE2.addEventListener("submit", function(event) {
    event.preventDefault();
   
    

    let valid = true;

    // Email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Required*";
        emailError.style.color = "red";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Required*";
        passwordError.style.color = "red";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Gender
    let genderSelected = false;
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        genderError.textContent = "Please select a gender";
        genderError.style.color = "red";
        valid = false;
    } else {
        genderError.textContent = "";
    }

    // Phone Number
    let phoneValue = phoneInput.value.trim();
    if (phoneValue === "") {
        phoneError.textContent = "Required*";
        phoneError.style.color = "red";
        valid = false;
    } else if (phoneValue.length !== 10 || isNaN(phoneValue)) {
        phoneError.textContent = "Phone number must be exactly 10 digits";
        phoneError.style.color = "red";
        valid = false;
    } else {
        phoneError.textContent = "";
    }

    // Final: Stop form submit if any field has error
    if (valid) {
        let existingUser = JSON.parse(localStorage.getItem("signupUser"));
        if (existingUser && existingUser.email === emailInput.value.trim()) {
            createaccounterror.textContent="You already have an account. Please sign in.";
            createaccounterror.style.color="red";
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
             // redirect to login
            return;
        }
    let userData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
        gender: genderSelected,
        phone: phoneValue
    };
    localStorage.setItem("signupUser", JSON.stringify(userData));
    alert("Account Created Successfully!");
    window.location.href = "login.html";  // Redirect back to Login page
}
});