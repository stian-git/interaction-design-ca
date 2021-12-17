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

const shipmentPriceContainer = document.querySelector(".shipmentprice");
const invoiceFeeContainer = document.querySelector(".invoicefee");
const totalPriceContainer = document.querySelector(".totalprice");

const shipment = 7;
// 10 and 5 was the old values.
const invoiceFee = 2;

shipmentPriceContainer.innerHTML = shipment.toFixed(2);
invoiceFeeContainer.innerHTML = invoiceFee.toFixed(2);

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
  //console.log("Runs on load");
  basketArray = storage.getItem("Basket").split(";");
  let arrayIdx;
  let itemId;
  let itemName;
  let itemSize;
  let itemCount;
  let itemPrice;
  let itemThumb;
  let itemGender;
  let totalPrice = 0;

  basketArray.forEach((item) => {
    // set required attributes:
    itemId = item.match(/^\w+/)[0];
    arrayIdx = Number(itemId) - 1;
    itemPrice = allJackets[arrayIdx].price.toFixed(2);
    itemName = allJackets[arrayIdx].name;
    itemThumb = allJackets[arrayIdx].image.replace(".jpg", "-thumb.jpg");
    itemSize = item.split(",")[1].split("-")[1].toUpperCase();
    itemGender = item.split(",")[2];
    itemCount = item.split(",")[3];
    totalPrice += allJackets[arrayIdx].price * itemCount;
    // console.log(itemId);
    // console.log(arrayIdx);
    // console.log(itemPrice);
    // console.log(itemThumb);
    // console.log(itemSize);
    // console.log(itemGender);
    let dataToDisplayInBasket = { name: itemName, size: itemSize, qty: itemCount, img: itemThumb, price: itemPrice, gender: itemGender };
    console.log(dataToDisplayInBasket);
    displayBasketItem(dataToDisplayInBasket);
  });
  console.log("Total price:" + totalPrice);
  totalPriceContainer.innerHTML = (totalPrice + shipment + invoiceFee).toFixed(2);
}

getJacketsInBasket();

//basketItemContainer.innerHTML = "Svada";

function displayBasketItem(item) {
  const basketItemContainer = document.querySelector("tbody");
  console.log(item.price);
  console.log(item.name);
  let genderImage;
  let genderText = item.gender.charAt(0).toUpperCase() + item.gender.slice(1);
  if (item.gender == "female") {
    genderImage = "../images/outline_female_red_24dp.png";
  } else {
    genderImage = "../images/outline_male_red_24dp.png";
  }
  let sizeImage;
  let sizeText;
  switch (item.size) {
    case "S":
      sizeImage = "../images/size-s.png";
      sizeText = "Small";
      break;
    case "M":
      sizeImage = "../images/size-m.png";
      sizeText = "Medium";
      break;
    case "L":
      sizeImage = "../images/size-l.png";
      sizeText = "Large";
      break;
    case "XL":
      sizeImage = "../images/size-xl.png";
      sizeText = "X-Large";
      break;
    case "XXL":
      sizeImage = "../images/size-xxl.png";
      sizeText = "2X-Large";
      break;

    default:
      break;
  }
  //console.log(genderImage);
  //console.log(item.gender.charAt(0).toUpperCase() + item.gender.slice(1));
  //console.log(genderText);
  const itemHTML = `<tr>
  <td class="name">
    <img src="${item.img}" class="basket_productimage" />
    <p class="required">
      <img src="${sizeImage}" class="basket_navbutton" />
      <img src="${genderImage}" class="basket_navbutton" />
      <span class="tooltip_top">${sizeText}, ${genderText}</span>
    </p>

    <p class="basket_productname">${item.name}</p>
  </td>
  <td>
    <img src="./images/PlusButton.png" class="basket_navbutton" aria-label="Add 1" title="Add 1" />
    <p class="basket_qty" aria-label="Current quantity">${item.qty}</p>
    <img src="./images/MinusButton.png" class="basket_navbutton" aria-label="Subtract 1" title="Subtract 1" />
  </td>
  <td>${item.price}</td>
  <td>
    <img src="./images/X-Button.png" class="basket_navbutton" aria-label="Delete-button" title="Delete" />
  </td>
</tr>`;
  basketItemContainer.innerHTML += itemHTML;
}
