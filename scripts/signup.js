import { validateInput } from "./utils.js";

const API_URL = "https://sample-url.com";

// Form
const form = document.querySelector(".form");

// Inputs
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

// Hints
const nameHint = document.getElementById("name-hint");
const emailHint = document.getElementById("email-hint");
const passwordHint = document.getElementById("password-hint");
const formHint = document.getElementById("form-hint");

// Buttons
const formButton = document.querySelector(".form__button");

// States
let nameTouched = false;
let emailTouched = false;
let passwordTouched = false;
let formSubmitting = false;

// Validates name field when touched.
nameInput.addEventListener("blur", () => {
  nameTouched = true;
  validateInput("name", nameInput, nameHint);
});

// Validates email field when touched.
emailInput.addEventListener("blur", () => {
  emailTouched = true;
  validateInput("email", emailInput, emailHint);
});

// Validates password field when touched.
passwordInput.addEventListener("blur", () => {
  passwordTouched = true;
  validateInput("password", passwordInput, passwordHint);
});

// Validate name field when typing.
nameInput.addEventListener("input", () => {
  if (!nameTouched) return;
  validateInput("name", nameInput, nameHint);
});

// Validate email field when typing.
emailInput.addEventListener("input", () => {
  if (!emailTouched) return;
  validateInput("email", emailInput, emailHint);
});

// Validate password field when typing.
passwordInput.addEventListener("input", () => {
  if (!passwordTouched) return;
  validateInput("password", passwordInput, passwordHint);
});

// Handles form submission.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  nameTouched = true;
  emailTouched = true;
  passwordTouched = true;

  const isNameValid = validateInput("name", nameInput, nameHint);
  const isEmailValid = validateInput("email", emailInput, emailHint);
  const isPasswordValid = validateInput(
    "password",
    passwordInput,
    passwordHint,
  );

  if (!isNameValid || !isEmailValid || !isPasswordValid) return;

  formSubmitting = true;
  formButton.disabled = true;

  try {
    // Perform authentication request.
  } catch (error) {
    // Handle unexpected errors.
  } finally {
    nameTouched = false;
    emailTouched = false;
    passwordTouched = false;

    formSubmitting = false;
    formButton.disabled = false;
  }
});
