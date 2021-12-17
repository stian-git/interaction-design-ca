const storage = window.localStorage;

// Ex: .setItem(item, value), .getItem(item), .removeItem(item), .clear()

// reset if Items do not excist (indicates DB is probably empty)
if (!storage.getItem("ItemCounter")) {
  storage.clear();
  storage.setItem("ItemCounter", 1);
}

storage.setItem("ItemCounter", 2);

//console.log(storage.getItem("ItemCounter"));

const basketItemCounter = document.querySelector(".basket_items-number");
basketItemCounter.innerHTML = storage.getItem("ItemCounter");

// Updates basket item counter:
basketCounterContainer = document.querySelector(".basket_items-number");

function updateBasketItemCount() {
  let counter = 0;

  if (storage.getItem("Basket")) {
    let basketArray = storage.getItem("Basket").split(";");
    let currentItemCount;
    basketArray.forEach((item) => {
      currentItemCount = Number(item.match(/\w+$/)[0]);
      //console.log(currentItemCount);
      counter += currentItemCount;
    });
  }
  basketCounterContainer.innerHTML = counter;
}

updateBasketItemCount();

function addOrRemoveFromBasket(num, arr, arridx) {
  //arr = storage.getItem("Basket").split(";");
  console.log("We will add " + num + " to this: " + arr[arridx]);
  //console.log(arr);

  let oldItemData = arr[arridx];
  console.log(oldItemData);
  let oldItemCount = Number(oldItemData.match(/\w+$/)[0]);

  //console.log("Old counter: " + oldItemCount);
  let newItemCount = oldItemCount + num;

  if (newItemCount == 0) {
    console.log("You can`t get below 1!");
    newItemCount = 1;
  }
  //console.log(newItemCount);
  let newItemData = oldItemData.replace("," + oldItemCount, "," + newItemCount);
  //console.log(newItemData);
  arr[arridx] = newItemData;
  //console.log("New Basket Array:");
  //console.log(arr);
  storage.setItem("Basket", arr.join(";"));
}
