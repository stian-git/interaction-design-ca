const jacketsContainer = document.querySelector(".main__jacketlist");
let jackets;

function showJackets(filteredArr) {
  jacketsContainer.innerHTML = "";
  if (filteredArr) {
    jackets = filteredArr;
    console.log("Using provided Array");
  } else {
    jackets = allJackets;
    //console.log(allJackets);
    console.log("Using default Array");
  }
  for (var i = 0; i < jackets.length; i++) {
    //let productLink = `<a href="jacketdetails.html?id=${jackets[i].id}" class="jacket-cta" title="${jackets[i].name}">View</a>`;
    let productLink = `<p class="jacket-cta" title="${jackets[i].name}">View</p>`;
    let bestbuyIcon = ``;
    let maleIcon = ``;
    let femaleIcon = ``;
    if (jackets[i].sales === true) {
      //productLink = `<a href="jacketdetails.html?id=${jackets[i].id}" class="jacket-cta jacketsale" title="${jackets[i].name}">On Sale</a>`;
      productLink = `<p class="jacket-cta jacketsale" title="${jackets[i].name}">On Sale</p>`;
      bestbuyIcon = `<svg id="BestBuy-Mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 78" aria-label="Best buy badge">
    <g id="Polygon_1" data-name="Polygon 1" fill="#0a3641">
      <path d="M 53.22784805297852 76.64013671875 L 41.46365737915039 70.48397827148438 L 41 70.24135589599609 L 40.53635406494141 70.48397827148438 L 28.77214431762695 76.64012908935547 L 22.87254524230957 64.74359893798828 L 22.64007759094238 64.27484130859375 L 22.12243270874023 64.19855499267578 L 8.986950874328613 62.26295852661133 L 11.20552253723145 49.16994476318359 L 11.2929220199585 48.65416717529297 L 10.91906642913818 48.28823471069336 L 1.429614782333374 38.9999885559082 L 10.91906642913818 29.71175575256348 L 11.2929220199585 29.34583282470703 L 11.20552253723145 28.83004379272461 L 8.986970901489258 15.73703002929688 L 22.12244415283203 13.80143356323242 L 22.64008903503418 13.7251443862915 L 22.87255477905273 13.25638866424561 L 28.77217292785645 1.359864592552185 L 40.536376953125 7.516033172607422 L 41.00003433227539 7.758655548095703 L 41.46368789672852 7.516033172607422 L 53.22784805297852 1.359876394271851 L 59.12746810913086 13.2564001083374 L 59.35993194580078 13.7251558303833 L 59.87757873535156 13.80143356323242 L 73.01303863525391 15.73704051971436 L 70.79447937011719 28.83005523681641 L 70.70707702636719 29.34583282470703 L 71.0809326171875 29.71176719665527 L 80.57038116455078 39 L 71.0809326171875 48.28823471069336 L 70.70707702636719 48.65416717529297 L 70.79447937011719 49.16994476318359 L 73.01303863525391 62.26295852661133 L 59.87757873535156 64.19855499267578 L 59.35993194580078 64.27484130859375 L 59.12746810913086 64.74359893798828 L 53.22784805297852 76.64013671875 Z" stroke="none"/>
      <path d="M 29.21401977539063 2.719718933105469 L 23.76843643188477 13.70067596435547 L 23.30351257324219 14.63818740844727 L 22.26822662353516 14.79074859619141 L 10.14360809326172 16.57738494873047 L 12.19145965576172 28.66298675537109 L 12.36626434326172 29.69454956054688 L 11.61855316162109 30.42639923095703 L 2.859222412109375 38.9999885559082 L 11.61855316162109 47.57358551025391 L 12.36626434326172 48.30543518066406 L 12.19145965576172 49.33699798583984 L 10.14360046386719 61.42259979248047 L 22.26821136474609 63.20923614501953 L 23.30350112915039 63.36180114746094 L 23.76842498779297 64.29931640625 L 29.21398544311523 75.28026580810547 L 40.07270050048828 69.59794616699219 L 41 69.11270141601563 L 41.92729949951172 69.59794616699219 L 52.78600311279297 75.28028106689453 L 58.23157501220703 64.29931640625 L 58.69650268554688 63.36180114746094 L 59.73178863525391 63.20923614501953 L 71.85639190673828 61.42259979248047 L 69.80854034423828 49.33699798583984 L 69.63373565673828 48.30543518066406 L 70.38144683837891 47.57358551025391 L 79.14077758789063 39 L 70.38144683837891 30.42641067504883 L 69.63373565673828 29.69456100463867 L 69.80854034423828 28.66299819946289 L 71.85639190673828 16.57740783691406 L 59.73178863525391 14.79076385498047 L 58.69650268554688 14.63819885253906 L 58.23157501220703 13.70069122314453 L 52.78600311279297 2.719718933105469 L 41.92732620239258 8.402046203613281 L 41.00002670288086 8.887298583984375 L 40.07272338867188 8.402046203613281 L 29.21401977539063 2.719718933105469 M 28.33033752441406 0 L 41.00002670288086 6.630012512207031 L 53.66968536376953 0 L 60.02334976196289 12.81212615966797 L 74.16968536376953 14.89668655395508 L 71.78042602539063 28.99712371826172 L 82 39 L 71.78042602539063 49.00287628173828 L 74.16968536376953 63.10332489013672 L 60.02334976196289 65.18787384033203 L 53.66968536376953 78 L 41 71.36998748779297 L 28.33029937744141 77.99998474121094 L 21.97665023803711 65.18787384033203 L 7.830299377441406 63.10332489013672 L 10.21957397460938 49.00287628173828 L 0 38.9999885559082 L 10.21957397460938 28.99711227416992 L 7.830314636230469 14.89666366577148 L 21.97666168212891 12.81211090087891 L 28.33033752441406 0 Z" stroke="none" fill="#d0d9d1"/>
    </g>
    <text id="Best_buy_" data-name="Best buy!" transform="translate(14 46)" fill="#d0d9d1" font-size="16" font-family="Oswald"><tspan x="0" y="0">Best buy!</tspan></text>
  </svg>`;
    }
    if (jackets[i].male === true) {
      maleIcon = `<img src="../images/outline_male_black_24dp.png" aria-label="Male Icon">`;
    }
    if (jackets[i].female === true) {
      femaleIcon = `<img src="../images/outline_female_black_24dp.png" aria-label="Female Icon">`;
    }
    jacketsContainer.innerHTML += `
  <a href="jacketdetails.html?id=${jackets[i].id}">
    <div class="jacketcontainer">
      <div class="image_container">
        <img src="${jackets[i].image}" alt="${jackets[i].name}" aria-label="Jacket name: ${jackets[i].name}"/>
        ${bestbuyIcon}
        </div>
      <div class="jacket_info">
        <h2>${jackets[i].name}</h2>
        <p class="jacketprice">${jackets[i].price} EUR</p>
        <p class="jacketgender">${femaleIcon} ${maleIcon}</p>
        ${productLink}
      </div>
    </div>
  </a>`;
  }
}
showJackets();

function genderFilter(gender) {
  //console.log("Male-filter: " + gender);
  let result = [];

  // What if we want both?
  if (gender == "male") {
    for (let i = 0; i < jackets.length; i++) {
      //console.log(jackets[i].id);
      if (jackets[i].male == true) {
        result.push(jackets[i]);
      }
    }
  } else {
    for (let j = 0; j < jackets.length; j++) {
      if (jackets[j].female == true) {
        result.push(jackets[j]);
      }
    }
  }
  showJackets(result);
  //return result;
}

function clearFilter() {
  jackets = allJackets;
  showJackets(allJackets);
}

//genderFilter("male");

function sizeFilter(sizes) {
  let result = [];
  jackets.forEach((element) => {
    // Adds - to create a unique syntax.
    let sizeString = "-" + element.sizes.join("-") + "-";
    //console.log(element.sizes.join("-"));
    //console.log(sizeString);
    for (let k = 0; k < sizes.length; k++) {
      let sizeMatch = sizeString.search("-" + sizes[k] + "-");
      //console.log("Looking for: " + sizes[k]);
      //console.log(sizeMatch);
      if (sizeMatch >= 0) {
        console.log(sizeMatch);
        result.push(element);
        break;
      }
    }
  });
  console.log(result);
  showJackets(result);
}
sizeFilter(["XL"]);
//sizeFilter(["S","M"])

// Create a function and eventlistener that combines the two filters each time.
// filter-field: Gender(radio), Size(checkbox), ClearFilter.
