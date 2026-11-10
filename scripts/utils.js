const showInputHint = (input, inputHint, message, type = "error") => {
  inputHint.textContent = message;

  input.classList.add("form__input--error");

  inputHint.classList.remove("form__hint--hidden");
  inputHint.classList.add(
    "form__hint--vissible",
    type !== "error" ? "form__hint--success" : "form__hint--error",
  );
};

const hideInputHint = (inputHint, input, type = "error") => {
  if (input !== null) input.classList.remove("form__input--error");

  inputHint.textContent = "";
  inputHint.classList.remove(
    "form__hint--vissible",
    type !== "error" ? "form__hint--success" : "form__hint--error",
  );
  inputHint.classList.add("form__hint--hidden");
};

/**
 * Validates an input field.
 * @param {"name" | "email" | "password"} type
 * @param {HTMLInputElement} input
 * @param {HTMLElement} inputHint
 */
export const validateInput = (type, input, inputHint) => {
  const fail = (message) => {
    return showInputHint(input, inputHint, message);
  };

  // Validate name
  if (type === "name") {
    const nameLength = input.value.trim().length;

    if (!nameLength) {
      return fail("Name is required.");
    }

    if (nameLength < 2 || nameLength > 30) {
      return fail("Name must be between 2 and 30 characters.");
    }
  }

  // Validate email
  if (type === "email") {
    if (input.validity.valueMissing) {
      return fail("Email is required.");
    }

    if (input.validity.typeMismatch) {
      return fail("Invalid email address.");
    }
  }

  // Validate password (manual validation)
  if (type === "password") {
    const passwordLength = input.value.length;

    if (!passwordLength) {
      return fail("Password is required.");
    }

    if (passwordLength < 8) {
      return fail("Password is too short.");
    }

    if (passwordLength > 128) {
      return fail("Password is too long.");
    }
  }

  hideInputHint(inputHint, input);
  return true;
};
