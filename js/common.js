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
