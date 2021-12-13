const checkOutForm = document.querySelector(".checkoutDetails");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const addressLine1 = document.querySelector("#address1");
const addressLine2 = document.querySelector("#address2");
const zip = document.querySelector("#zip");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
//const payMethod = document.querySelector("fieldset[type=radio]");

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  //console.log(patternMatches);
  return patternMatches;
}

function lengthCheck(string, length) {
  if (string.trim().length >= length) {
    return true;
  } else {
    return false;
  }
}

function textOnlyCheck(string) {
  const regEx = /^[a-zA-ZæøåÆØÅ]+(([',. -][a-zA-ZæøåÆØÅ ])?[a-zA-ZæøåÆØÅ]*)*$/;
  const textOnly = regEx.test(string);
  return textOnly;
}

// Validate name field:
function validateName(event) {
  if (!lengthCheck(fullName.value, 3) || !textOnlyCheck(fullName.value)) {
    fullName.classList.add("validationerror");
  } else {
    fullName.classList.remove("validationerror");
    // Add visual for success?
  }
}

fullName.addEventListener("blur", validateName);

// Validate email address:
function validateEmailAddress(event) {
  if (!validateEmail(email.value)) {
    email.classList.add("validationerror");
  } else {
    email.classList.remove("validationerror");
    // Add visual for success?
  }
}

email.addEventListener("blur", validateEmailAddress);

// Validate address line 1 field:
function validateAddress1(event) {
  if (!lengthCheck(addressLine1.value, 3)) {
    addressLine1.classList.add("validationerror");
  } else {
    addressLine1.classList.remove("validationerror");
    // Add visual for success?
  }
}

addressLine1.addEventListener("blur", validateAddress1);

// Validate address line 1 field:
function validateAddress2(event) {
  // No requirements here.
  // Add a checkmark?
}

addressLine2.addEventListener("blur", validateAddress2);

// Validate Zip:
function validateZip(event) {
  if (!lengthCheck(zip.value, 3)) {
    zip.classList.add("validationerror");
  } else {
    zip.classList.remove("validationerror");
    // Add visual for success?
  }
}

zip.addEventListener("blur", validateZip);

// Validate City:
function validateCity(event) {
  if (!lengthCheck(city.value, 3) || !textOnlyCheck(city.value)) {
    city.classList.add("validationerror");
  } else {
    city.classList.remove("validationerror");
    // Add visual for success?
  }
}

city.addEventListener("blur", validateCity);

// Validate Country:
function validateCountry(event) {
  if (!lengthCheck(country.value, 3) || !textOnlyCheck(country.value)) {
    country.classList.add("validationerror");
  } else {
    country.classList.remove("validationerror");
    // Add visual for success?
  }
}

country.addEventListener("blur", validateCountry);

// Final check before sending.

function validateForm(event) {
  event.preventDefault();
  // Resets:

  // Validations:
  if (document.querySelectorAll(".validationerror").length === 0) {
    // Actions to do when form is ready to be sent.
  }
}

checkOutForm.addEventListener("submit", validateForm);
