const cardContainer = document.getElementsByClassName("card-list")[0];

//div for card-box
// const cardBox = document.createElement("div");
// cardBox.setAttribute("class", "card-box");

// cardBox.innerHTML =
//   '<div class="card-img"><img src="https://m.media-amazon.com/images/I/71EUL0Xgb+L._AC_SX679_.jpg"></div><div class="img-description"><h4>Round Cake Pans</h4><p>Set of 4 Silicone Molds for Baking, Nonstick & Quick Release Baking Pans for Layer Cakes</p><a href="#" class="item-link">Link to the item</a></div>';

// cardContainer.appendChild(cardBox);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.products.length; i++) {
      console.log(i);
      const cardBox = document.createElement("div");
      cardBox.setAttribute("class", "card-box");
      cardBox.innerHTML =
        `<div class="card-img"><img src=${data.products[i].images[0]}></div><div class="img-description"><h4>${data.products[i].title}</h4><p>${data.products[i].description}</p></div>`;

      cardContainer.appendChild(cardBox);    }
  });
