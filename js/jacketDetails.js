const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const jacketId = params.get("id");
const jacketContainer = document.querySelector(".jacket-details");
const jacketName = document.querySelector(".jacketname__h1");
const jacket = jackets.find(({ id }) => id == jacketId);

let thumb1 = jacket.image.replace(".jpg", "-thumb.jpg");
let thumb2 = jacket.image.replace(".jpg", "-2-thumb.jpg");
let thumb3 = jacket.image.replace(".jpg", "-3-thumb.jpg");
let thumb4 = jacket.image.replace(".jpg", "-4-thumb.jpg");

jacketName.innerHTML = `${jacket.name}`;
jacketContainer.innerHTML = `<section class="jacketdetails__images">

<img src="${jacket.image}" alt="${jacket.name}" class="product-image" title="${jacket.name}" />
<div class="product-image_thumbnails">
<div>
    <img src="${thumb1}" alt="${jacket.name}-1" title="Thumb 1, ${jacket.name}" onerror="this.style.display='none'"/>
  </div>
  <div>
  <img src="${thumb2}" alt="${jacket.name}-2" title="Thumb 2, ${jacket.name}" onerror="this.style.display='none'"/>
  </div>
  <div>
    <img src="${thumb3}" alt="${jacket.name}-3" title="Thumb 3, ${jacket.name}" onerror="this.style.display='none'" />
  </div>
  <div>
    <img src="${thumb4}" alt="${jacket.name}-4" title="Thumb 4, ${jacket.name}" onerror="this.style.display='none'"/>
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
      <input type="radio" name="gender" id="female" value="female" hidden="true"><label for="female" class="gender"><p class="required"><img src="../images/outline_female_red_24dp.png"><span class="tooltip_top tooltip_gendertop">Female</span></p></label>
      <input type="radio" name="gender" id="male" value="male" hidden="true"><label for="male" class="gender"><p class="required"><img src="../images/outline_male_red_24dp.png"><span class="tooltip_top tooltip_gendertop">Male</span></p></label>
    </fieldset>
    <fieldset>
    <legend>Select Size:</legend>
      <input type="radio" name="size" id="size-s" value="size-s" hidden="true"><label for="size-s"><img src="../images/size-s.png" aria-label="Size: S"></label>
      <input type="radio" name="size" id="size-m" value="size-m" hidden="true"><label for="size-m"><img src="../images/size-m.png" aria-label="Size: M"></label>
      <input type="radio" name="size" id="size-l" value="size-l" hidden="true"><label for="size-l"><img src="../images/size-l.png" aria-label="Size: L"></label>
      <input type="radio" name="size" id="size-xl" value="size-xl" hidden="true"><label for="size-xl"><img src="../images/size-xl.png" aria-label="Size: XL"></label>
      <input type="radio" name="size" id="size-xxl" value="size-xxl" hidden="true"><label for="size-xxl"><img src="../images/size-xxl.png" aria-label="Size: XXL"></label>
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

const buyButton = document.querySelector("button[type=submit]");
//console.log(buyButton);
buyButton.disabled = true;

function checkSections() {
  const selectedSize = document.querySelector("input[name=size]:checked");
  const selectedGender = document.querySelector("input[name=gender]:checked");
  if (selectedSize && selectedGender) {
    buyButton.disabled = false;
  } else {
    buyButton.disabled = true;
  }
}

const selectionForm = document.querySelector(".form_orderdetails");

selectionForm.addEventListener("change", checkSections);
