import { validateInput } from "./utils.js";

const API_URL = "https://sample-url.com";

// Form
const form = document.querySelector(".form");

// Inputs
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

// Hints
const emailHint = document.getElementById("email-hint");
const passwordHint = document.getElementById("password-hint");
const formHint = document.getElementById("form-hint");

// Buttons
const formButton = document.querySelector(".form__button");

// States
let emailTouched = false;
let passwordTouched = false;
let formSubmitting = false;

// Validates email field when touched.
emailInput.addEventListener("blur", () => {
  emailTouched = true;
  return validateInput("email", emailInput, emailHint);
});

// Validates password field when touched.
passwordInput.addEventListener("blur", () => {
  passwordTouched = true;
  return validateInput("password", passwordInput, passwordHint);
});

// Validates email field when typing.
emailInput.addEventListener("input", () => {
  if (!emailTouched) return;
  validateInput("email", emailInput, emailHint);
});

// Validates password field when typing.
passwordInput.addEventListener("input", () => {
  if (!passwordTouched) return;
  validateInput("password", passwordInput, passwordHint);
});

// Handles form submission.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  emailTouched = true;
  passwordTouched = true;

  const isEmailValid = validateInput("email", emailInput, emailHint);
  const isPasswordValid = validateInput(
    "password",
    passwordInput,
    passwordHint,
  );

  if (!isEmailValid || !isPasswordValid) return;
  if (formSubmitting) return;

  formSubmitting = true;
  formButton.disabled = true;

  try {
    // Perform authentication request.
  } catch (error) {
    // Handle unexpected errors.
  } finally {
    emailTouched = false;
    passwordTouched = false;

    formSubmitting = false;
    formButton.disabled = false;
  }
});
