const form = document.querySelector("form");
const submitButton = document.querySelector(".submit-btn");
const buttonImage = document.querySelector(".button-image");

suppressValidationUI(form);

relocateErrorMessages();

// Hide error message on click/keypress in input/textarea field
document.addEventListener("click", (e) => hideErrorMessages(e));
document.addEventListener("keypress", (e) => hideErrorMessages(e));

// Initiate loading animation on form submission
form.addEventListener("submit", () => initiateLoader());

function suppressValidationUI(form) {
  // Suppress default tooltips
  form.addEventListener(
    "invalid",
    (e) => {
      e.preventDefault();
    },
    true
  );

  // Support Safari, iOS Safari and Android
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
    }
  });
}

function relocateErrorMessages() {
  submitButton.addEventListener("click", () => {
    let invalidFields = form.querySelectorAll(":invalid");
    let errorMessages = form.querySelectorAll(".error-msg"),
      parent;

    // Remove any existing messages
    for (let i = 0; i < errorMessages.length; i++) {
      errorMessages[i].parentNode.removeChild(errorMessages[i]);
      errorMessages[i].classList.remove("error");
    }

    //   Insert default error message
    for (let i = 0; i < invalidFields.length; i++) {
      let parent = invalidFields[i].parentNode;
      parent.insertAdjacentHTML(
        "beforeend",
        "<div class='error-msg'>" +
          invalidFields[i].validationMessage +
          "</div>"
      );
      parent.classList.add("error");
    }

    // If there are errors, give focus to the first invalid field
    if (invalidFields.length > 0) {
      invalidFields[0].focus();
    }
  });
}

function hideErrorMessages(e) {
  const selectedField = e.target;

  if (selectedField.classList.value === "text-input") {
    selectedField.parentNode.classList.remove("error");
    if (selectedField.parentNode.lastChild.classList.value !== "error-msg")
      return;
    else selectedField.parentNode.lastChild.remove();
  }
}

function initiateLoader() {
  buttonImage.innerHTML = "<div class='loader'></div>";
}
