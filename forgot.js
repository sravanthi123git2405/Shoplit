const forgotForm = document.getElementById("forgotForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const newPasswordSection = document.getElementById("newPasswordSection");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");
const resetMessage = document.getElementById("resetMessage");

let step = 1;  // Step 1: check email

forgotForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const savedUser = JSON.parse(localStorage.getItem("signupUser"));

  if (!savedUser) {
    resetMessage.textContent = "No account found. Please sign up first.";
    resetMessage.style.color = "red";
    return;
  }

  if (step === 1) {
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required";
      return;
    } else {
      emailError.textContent = "";
    }

    if (emailInput.value.trim() !== savedUser.email) {
      emailError.textContent = "No account found with this email.";
      return;
    }

    // valid email
    newPasswordSection.style.display = "block";
    emailInput.disabled = true;
    step = 2;

  } else if (step === 2) {
    if (newPassword.value.trim() === "" || confirmPassword.value.trim() === "") {
      passwordError.textContent = "Both password fields are required.";
      return;
    }

    if (newPassword.value !== confirmPassword.value) {
      passwordError.textContent = "Passwords do not match.";
      return;
    }

    // update password
    savedUser.password = newPassword.value.trim();
    localStorage.setItem("signupUser", JSON.stringify(savedUser));

    resetMessage.textContent = "Password reset successfully! Redirecting to login...";
    resetMessage.style.color = "green";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  }
});