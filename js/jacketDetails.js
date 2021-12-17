const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const jacketId = params.get("id");
const jacketContainer = document.querySelector(".jacket-details");
const jacketName = document.querySelector(".jacketname__h1");
const jacket = allJackets.find(({ id }) => id == jacketId);

const img1 = jacket.image;
const img2 = jacket.image.replace(".jpg", "-2.jpg");
const img3 = jacket.image.replace(".jpg", "-3.jpg");
const img4 = jacket.image.replace(".jpg", "-4.jpg");
//console.log(img4);
const thumb1 = jacket.image.replace(".jpg", "-thumb.jpg");
const thumb2 = jacket.image.replace(".jpg", "-2-thumb.jpg");
const thumb3 = jacket.image.replace(".jpg", "-3-thumb.jpg");
const thumb4 = jacket.image.replace(".jpg", "-4-thumb.jpg");

//console.log(jacket.sizes);
let sizeS = "";
let sizeM = "";
let sizeL = "";
let sizeXL = "";
let sizeXXL = "";
jacket.sizes.forEach((size) => {
  //console.log(size);
  switch (size) {
    case "S":
      sizeS = `<input type="radio" name="size" id="size-s" value="size-s" hidden="true"><label for="size-s"><img src="../images/size-s.png" aria-label="Size: S"></label>`;
      break;
    case "M":
      sizeM = `<input type="radio" name="size" id="size-m" value="size-m" hidden="true"><label for="size-m"><img src="../images/size-m.png" aria-label="Size: M"></label>`;
      break;
    case "L":
      sizeL = `<input type="radio" name="size" id="size-l" value="size-l" hidden="true"><label for="size-l"><img src="../images/size-l.png" aria-label="Size: L"></label>`;
      break;
    case "XL":
      sizeXL = `<input type="radio" name="size" id="size-xl" value="size-xl" hidden="true"><label for="size-xl"><img src="../images/size-xl.png" aria-label="Size: XL"></label>`;
      break;
    case "XXL":
      sizeXXL = `<input type="radio" name="size" id="size-xxl" value="size-xxl" hidden="true"><label for="size-xxl"><img src="../images/size-xxl.png" aria-label="Size: XXL"></label>`;
      break;
    default:
      break;
  }
});

let genderMale = "";
let genderFemale = "";

if (jacket.male) {
  genderMale = `<input type="radio" name="gender" id="male" value="male" hidden="true"><label for="male" class="gender"><p class="required"><img src="../images/outline_male_red_24dp.png"><span class="tooltip_top tooltip_gendertop">Male</span></p></label>`;
}

if (jacket.female) {
  genderFemale = `<input type="radio" name="gender" id="female" value="female" hidden="true"><label for="female" class="gender"><p class="required"><img src="../images/outline_female_red_24dp.png"><span class="tooltip_top tooltip_gendertop">Female</span></p></label>`;
}
//let sizeS = "<input type="radio" name="size" id="size-s" value="size-s" hidden="true"><label for="size-s"><img src="../images/size-s.png" aria-label="Size: S"></label>";

jacketName.innerHTML = `${jacket.name}`;
jacketContainer.innerHTML = `<section class="jacketdetails__images">

<img src="${jacket.image}" alt="${jacket.name}" class="product-image" title="${jacket.name}" onerror="this.style.display='none'"/>
<div class="product-image_thumbnails">
<div>
    <img src="${thumb1}" alt="${jacket.name}-1" title="Thumb 1, ${jacket.name}" class="thumbimage" onclick="changeProductImage(1)" onerror="this.style.display='none'"/>
  </div>
  <div>
  <img src="${thumb2}" alt="${jacket.name}-2" title="Thumb 2, ${jacket.name}" class="thumbimage" onclick="changeProductImage(2)" onerror="this.style.display='none'"/>
  </div>
  <div>
    <img src="${thumb3}" alt="${jacket.name}-3" title="Thumb 3, ${jacket.name}" class="thumbimage" onclick="changeProductImage(3)" onerror="this.style.display='none'" />
  </div>
  <div>
    <img src="${thumb4}" alt="${jacket.name}-4" title="Thumb 4, ${jacket.name}" class="thumbimage" onclick="changeProductImage(4)" onerror="this.style.display='none'"/>
  </div>
</div>
</section>
<section class="jacketdetails__intro_form">
  <h3>${jacket.name}</h3>
  <p class="ratingstars"><a href="#jacketdetails_reviews" title="View Reviews"><img src="../images/${jacket.rating}-stars.png" aria-label="Review Stars: ${jacket.rating}"></a></p>
  ${jacket.description}
  <p><a href="#jacket_details" alt="Read details for this jacket" title="Read details about this jacket">Read more...</a></p>
  <form action="checkout.html" method="get" class="form_orderdetails">
    <fieldset>
      <legend>Select Gender:</legend>
      ${genderFemale}
      ${genderMale}
    </fieldset>
    <fieldset>
    <legend>Select Size:</legend>
      ${sizeS}
      ${sizeM}
      ${sizeL}
      ${sizeXL}
      ${sizeXXL}
    </fieldset>
    <p class="product-specific__price">${jacket.price} EUR</p>
    <input type="hidden" value="${jacketId}" id="id" name="id">
    <button type="submit" class="jacket-cta" aria-label="Click to buy now">Buy now</button>
  </form>
  
  </div>
  
</section>
<section class="jacketdetails__details">
  <h2 id="jacket_details">Details</h2>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
  <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est </p>
<p><a href="#top" alt="Scroll to the top" title="Scroll to the top of page">To the top...</a></p>

</section>
<section class="jacketdetails__reviews">
  <h2 id="jacketdetails_reviews">Reviews</h2>
  <img src="../images/${jacket.rating}-stars.png" aria-label="Rating-stars: ${jacket.rating}" title="Rating-stars: ${jacket.rating}">
  <blockquote>${jacket.reviewtext}</blockquote>
  <p class="reviewername">${jacket.reviewer}</p>
</section>`;

// if there is only one gender, we select it by default.

if (!(jacket.male == jacket.female)) {
  document.querySelector("input[name=gender]").checked = true;
}

// Change image to show.
function changeProductImage(newImg) {
  const mainImageContainer = document.querySelector(".product-image");
  let nextImg;
  switch (newImg) {
    case 1:
      nextImg = img1;
      break;
    case 2:
      nextImg = img2;
      break;
    case 3:
      nextImg = img3;
      break;
    case 4:
      nextImg = img4;
      break;
    default:
      break;
  }
  mainImageContainer.src = nextImg;
  // Below line is to make the page recover if the selected img is missing.
  mainImageContainer.style.display = "block";
}

let selectedSize;
let selectedGender;

function checkSections() {
  selectedSize = document.querySelector("input[name=size]:checked");
  selectedGender = document.querySelector("input[name=gender]:checked");
  if (selectedSize && selectedGender) {
    buyButton.disabled = false;
  } else {
    buyButton.disabled = true;
  }
}

const selectionForm = document.querySelector(".form_orderdetails");

selectionForm.addEventListener("change", checkSections);

// Buy and basket functions:

const buyButton = document.querySelector("button[type=submit].jacket-cta");
//console.log(buyButton);
buyButton.disabled = true;

function addToBasket(event) {
  //event.preventDefault();

  //let jacketData = [jacketId, selectedSize.value, selectedGender.value, 1];
  let jacketData = `${jacketId},${selectedSize.value},${selectedGender.value},1`;
  console.log("Adding: " + jacketData);
  addToStorage(jacketData);
  //storage.setItem("Basket", jacketData2 + ";");
  //console.log(storage.getItem("Basket"));
  updateBasketItemCount();
}
buyButton.addEventListener("click", addToBasket);

function addToStorage(str) {
  //already in basket?
  console.log("AddToStorage: " + str + "(" + typeof str + ")");

  let currentBasket = [];
  if (storage.getItem("Basket")) {
    //str = toString(str);
    currentBasket = storage.getItem("Basket").split(";");
    //console.log(typeof str);
    //console.log("Sending: " + str + "(" + typeof str + ")");
    let duplicateCheckResult = alreadyInBasket(str, currentBasket);
    if (typeof duplicateCheckResult == "object") {
      //console.log("We have an object");
      console.log(duplicateCheckResult);
    }
    if (duplicateCheckResult == false) {
      //console.log("We have a boolean = no duplicate");
      currentBasket.push(str);
    }
    //console.log(typeof duplicateCheckResult);
    //console.log("Old storage is: ");
    //console.log(currentBasket);

    storage.setItem("Basket", currentBasket.join(";"));
    //console.log("New storage is: " + currentBasket.join(";"));
    //console.log(currentBasket);
  } else {
    //console.log("New storage added to empty basket: " + str);
    storage.setItem("Basket", str);
  }
  //console.log(storage.getItem("Basket"));

  //console.log("New basket: " + storage.getItem("Basket"));
}

function removeFromStorage(str) {}

function alreadyInBasket(str, basketArray) {
  let trimmedSearchString = str.match(/(.*)le/)[0];
  //console.log("Trimmed: " + trimmedSearchString);
  //console.log(basketArray);
  let match;
  for (let i = 0; i < basketArray.length; i++) {
    //console.log("Searching for: " + trimmedSearchString);
    //console.log("in this string: " + basketArray[i]);
    match = basketArray[i].search(trimmedSearchString);
    //console.log(match + " : 0 or higher = match");
    if (match >= 0) {
      //console.log("Item exists, we will add one more to the existing one");
      basketArray = addOrRemoveFromBasket(1, basketArray, i);
      // stop iterating on first match:
      return basketArray;
    }
  }
  return false;
  //console.log(str.search(regex));
  // regex; (.*)le = 1,size-l,fema / 1,size-l,ma
}

// currentBasket = storage.getItem("Basket").split(";");
// addOrRemoveFromBasket(1, currentBasket, [0]);
