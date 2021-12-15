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

function toggleValidation(field, status) {
  //const valName = document.querySelector(".name .fas");
  field.style.display = "inline-flex";
  if (status === true) {
    field.classList.remove("fa-exclamation-circle");
    field.classList.add("fa-check-circle");
    checkAllFields();
  } else {
    field.classList.remove("fa-check-circle");
    field.classList.add("fa-exclamation-circle");
    submitButton.disabled = true;
  }
}
function validateName(event) {
  const validationField = document.querySelector(".name .fas");
  const helptext = document.querySelector("label[for=name] .helptext");
  const nameLength = 3;
  if (!lengthCheck(fullName.value, nameLength) || !textOnlyCheck(fullName.value)) {
    fullName.classList.add("validationerror");
    toggleValidation(validationField, false);
    helptext.style.display = "block";
    helptext.innerHTML = `Only letters. Minimum ${nameLength} characters.`;
  } else {
    fullName.classList.remove("validationerror");
    toggleValidation(validationField, true);
    helptext.style.display = "none";
  }
}

fullName.addEventListener("blur", validateName);

// Validate email address:
function validateEmailAddress(event) {
  const validationField = document.querySelector(".email .fas");
  const helptext = document.querySelector("label[for=email] .helptext");
  if (!validateEmail(email.value)) {
    email.classList.add("validationerror");
    toggleValidation(validationField, false);
    helptext.style.display = "block";
    helptext.innerHTML = "Email address looks invalid";
  } else {
    email.classList.remove("validationerror");
    toggleValidation(validationField, true);
    helptext.style.display = "none";
  }
}

email.addEventListener("blur", validateEmailAddress);

// Validate address line 1 field:
function validateAddress1(event) {
  const validationField = document.querySelector(".address1 .fas");
  const helptext = document.querySelector("label[for=address1] .helptext");
  const address1Length = 3;
  if (!lengthCheck(addressLine1.value, address1Length)) {
    addressLine1.classList.add("validationerror");
    toggleValidation(validationField, false);
    helptext.style.display = "block";
    helptext.innerHTML = `Minium ${address1Length} characters needed.`;
  } else {
    addressLine1.classList.remove("validationerror");
    toggleValidation(validationField, true);
    helptext.style.display = "none";
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
  const validationField = document.querySelector(".zip .fas");
  const helptext = document.querySelector("label[for=zip] .helptext");
  const zipLength = 3;
  if (!lengthCheck(zip.value, zipLength)) {
    zip.classList.add("validationerror");
    toggleValidation(validationField, false);
    helptext.style.display = "block";
    helptext.innerHTML = `Minium ${zipLength} characters needed.`;
  } else {
    zip.classList.remove("validationerror");
    toggleValidation(validationField, true);
    helptext.style.display = "none";
  }
}

zip.addEventListener("blur", validateZip);

// Validate City:
function validateCity(event) {
  const validationField = document.querySelector(".city .fas");
  const helptext = document.querySelector("label[for=city] .helptext");
  const cityLength = 3;
  if (!lengthCheck(city.value, cityLength) || !textOnlyCheck(city.value)) {
    city.classList.add("validationerror");
    toggleValidation(validationField, false);
    helptext.style.display = "block";
    helptext.innerHTML = `Only letters. Minimum ${cityLength} characters.`;
  } else {
    city.classList.remove("validationerror");
    toggleValidation(validationField, true);
    helptext.style.display = "none";
  }
}

city.addEventListener("blur", validateCity);

// Validate Country:
function validateCountry(event) {
  const validationField = document.querySelector(".country .fas");
  const helptext = document.querySelector("label[for=country] .helptext");
  if (country.value === "") {
    country.classList.add("validationerror");
    toggleValidation(validationField, false);
    helptext.style.display = "block";
    helptext.innerHTML = "Please select a country.";
  } else {
    country.classList.remove("validationerror");
    toggleValidation(validationField, true);
    helptext.style.display = "none";
  }
}

country.addEventListener("change", validateCountry);
country.addEventListener("blur", validateCountry);

// Final check before sending.

const termsCheckbox = document.querySelector("#terms");

function validateTerms(event) {
  //console.log("Validating Terms...!");
  const helptext = document.querySelector(".placeorder_container .helptext");
  if (!termsCheckbox.checked) {
    helptext.style.display = "block";
    helptext.innerHTML = "Please accept terms to place order.";
  } else {
    helptext.style.display = "none";
  }
}

termsCheckbox.addEventListener("click", validateTerms);

const submitButton = document.querySelector("button[type=submit]");
submitButton.disabled = true;

// CHECK and enable fields
function checkAllFields() {
  // NB: Currently missing additional check for Payment method as there are only one option.
  const validationCorrectCount = document.querySelectorAll(".fa-check-circle").length;
  if (validationCorrectCount === 6) {
    if (!termsCheckbox.checked) {
      validateTerms();
      return;
    }
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
checkOutForm.addEventListener("change", checkAllFields);

// Uncomment the below to stop forwarding data to the next page.
// function validateForm(event) {
//   event.preventDefault();
//   console.log("Submit");
// }

// checkOutForm.addEventListener("submit", validateForm);
function getJacketsInBasket() {
  console.log("Runs on load");
  // for (let i = 0; i < jackets.length; i++) {
  //   let id = storage.getItem("Jacket-" + jackets[i].id);
  //   if (id) {
  //     console.log(id);
  //   }
  storage.forEach((element) => {
    console.log(element);
  });

  //console.log(jacket.id);

  //console.log(storage.getItem("Jacket-" + jacket.id));
}

getJacketsInBasket();
