//import {
//  menuModalTemplate,
//  restaurantlistTemplate,
//  restaurantListCardTemplate,
//  menuListCardTemplate,
//  menuListHeaderTemplate,
//  menuListBodyTemplate
//} from "./template.js";

import * as template from "./template.js";
import * as cart from "./app/pageCart.js";

//import {
//  restaurantFetch,
//  menuHeaderFetch,
//  menuFetch,
//  fetchMenuModal
//} from "./fetch.js";

import * as fetch from "./fetch.js";

/*-------------------------------------------------------------------------------testes------------------------------------------------------------------------------------------------------*/
//document.getElementById("butao-rest").addEventListener("click", () => {
//  //alert("teste1");
//  restaurantRenderList();
//});
//document.getElementById("butao-rest-add").addEventListener("click", () => {
//  //alert("teste1");
//  restaurantRenderAddElementToList();
//});
//
//document.getElementById("butao-menus").addEventListener("click", () => {
//  alert("teste2");
//});
//document.getElementById("butao-modal").addEventListener("click", () => {
//  alert("teste3");
//});
//document.getElementById("butao-fetch").addEventListener("click", () => {
//  fetch.menuFetch();
//});

window.onload = function (e) {
  restaurantRenderList();
  fetch.restaurantFetch(restaurantRenderAddElementToList);
  //menuRenderList();
  //fetch.menuFetch(menuRenderAddElementToList, 1);
  //fetch.menuHeaderFetch(menuHeaderRenderToList, 1);
  //renderMenuModal();
  //fetch.fetchMenuModal(renderMenuModal);
};

/*-------------------------------------------------------------------------------testes------------------------------------------------------------------------------------------------------*/
let shoppingCartLogic_calculteTotal = function (allProducts) {
  let totalValue = 0;
  allProducts.map((price) => {
    let value = parseInt(price.product.price);
    totalValue += value * parseInt(price.quantity);
  });
  return totalValue;
};

let shoppingCartupdateItemQuantityAndValue = function (shopingCartItemElement, cardvaluechangeNumber) {
  let allProducts = JSON.parse(sessionStorage.getItem("allEntries"));
  // cardID === IDproduto no DOM
  let cardId = shopingCartItemElement.id;

  let unitIndex = allProducts.findIndex((item) => {
    if (cardId == item.product.id) {
      return true;
    }
    return false;
  });

  let unitPrice = allProducts[unitIndex].product.price;
  let quantity = allProducts[unitIndex].quantity + cardvaluechangeNumber;

  // if quantity <= 0 delete product
  if (quantity <= 0) {
    if (cardId == allProducts[unitIndex].product.id) {
      console.log("id igual");
      document.getElementById(cardId).remove();
      allProducts.splice(unitIndex, 1);
    }
    console.log("hehe");
    debugger;
  }

  // if quantity > 0
  if (quantity > 0) {
    allProducts[unitIndex].quantity = quantity;

    shopingCartItemElement.getElementsByClassName("shoppingcart-table-item-box-quantity-volume")[0].innerHTML = quantity;
    shopingCartItemElement.getElementsByClassName("shoppingcart-table-item-price-span")[0].innerHTML = quantity * unitPrice;

    document.getElementById("shoppingcart-footer-total-span").innerHTML = shoppingCartLogic_calculteTotal(allProducts);
  }

  sessionStorage.setItem("allEntries", JSON.stringify(allProducts));
};

let shoppingcartRender = function () {
  // render container
  let allProducts = JSON.parse(sessionStorage.getItem("allEntries"));
  console.log(allProducts);
  document.getElementById("shoppingcart-body").innerHTML = template.shoppingCartTemplate;

  document.getElementById("shoppingcart-module").addEventListener("click", (e) => {
    if (e.target.id === "shoppingcart-module") {
      document.getElementById("shoppingcart-module").remove();
    }
    if (e.target.closest("#shoppingcart-header-close")) {
      document.getElementById("shoppingcart-body").innerHTML = "";
    }
  });

  allProducts.map((item) => {
    document.getElementById("shoppingcart-table").insertAdjacentHTML(
      "afterbegin",
      template.shoppingCartItemTemplate(
        //"Chouriço",
        //"Belo e redondo Sardao",
        //"10",
        //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqSKHz5s8b_HeQLzxLrRn2xjD8dL_zZBIArSYfjg7&s"
        item.product.name,
        item.product.description,
        item.product.price,
        item.product.image,
        item.product.id,
        item.quantity
      )
    );
  });

  document.getElementById("shoppingcart-footer").insertAdjacentHTML("afterbegin", template.shoppingCartFooterTemplate);

  document.getElementById("shoppingcart-footer-total-span").innerHTML = shoppingCartLogic_calculteTotal(allProducts);

  document.getElementById("shoppingcart-table").addEventListener("click", (e) => {
    let shopingCartItemElement = e.target.closest(".shoppingcart-table-item");

    if (e.target.classList.contains("shoppingcart-table-item-box-quantity-increase")) {
      console.log("mais caralho");
      shoppingCartupdateItemQuantityAndValue(shopingCartItemElement, +1);
    }
    //remove quantity

    if (e.target.classList.contains("shoppingcart-table-item-box-quantity-decrease")) {
      shoppingCartupdateItemQuantityAndValue(shopingCartItemElement, -1);
    }
  });
};

//set cartContent via sessionStorage
let cartContent = function (product, quantity) {
  let allEntries = JSON.parse(sessionStorage.getItem("allEntries"));
  if (allEntries == null) {
    allEntries = [];
  }
  let duplicateCheck = 0;

  allEntries.map((products) => {
    if (product.id === products.product.id) {
      products.quantity = products.quantity + 1;
      duplicateCheck++;
    }
  });

  if (duplicateCheck === 0) {
    allEntries.push({ product, quantity });
  }

  sessionStorage.setItem("allEntries", JSON.stringify(allEntries));
};

/*-------------------------------------------------------------------------------1 restaurantlist------------------------------------------------------------------------------------------------------*/
let restaurantRenderList = function () {
  document.getElementById("body").innerHTML = "";

  console.log("restaurantRenderList");
  document.getElementById("body").innerHTML = template.restaurantlistTemplate;
  if (document.getElementById("header").innerHTML === "") {
    document.getElementById("header").innerHTML = template.restaurantHeaderTemplate;
    document.getElementById("cart-button").addEventListener("click", shoppingcartRender);
    document.getElementById("home-button").addEventListener("click", (e) => {
      restaurantRenderList();
      fetch.restaurantFetch(restaurantRenderAddElementToList);
    });
  }
  document.getElementsByClassName("searchBar")[0].addEventListener("input", searchInput);
  document.getElementById("table").addEventListener("click", (e) => {
    console.log(e.target.closest(".card").id);
    // changeUrl

    menuRenderList();
    fetch.menuFetch(menuRenderAddElementToList, e.target.closest(".card").id);
    fetch.menuHeaderFetch(menuHeaderRenderToList, e.target.closest(".card").id);
  });
};

let searchInput = function (e) {
  const value = e.target.value.toLowerCase();
  const cardName = [...document.getElementsByClassName("card")];
  //console.log(restaurantName);
  cardName.map((card) => {
    //console.log("----------------");
    //console.log(card.getElementsByClassName("restName")[0].innerText);
    //console.log("----------------");
    if (!card.getElementsByClassName("restName")[0].innerText.toLowerCase().includes(value)) {
      card.classList.add("hide");
    } else {
      card.classList.remove("hide");
    }
  });
  //console.log(value);
};

/*-------------------------------------------------------------------------------event delegation test------------------------------------------------------------------------------------------------------*/

//let cardArray = [...document.querySelectorAll(".card")];
//cardArray.map((card) => {
//  card.addEventListener("click", (e) => {
//    console.log(e);
//  });
//});
/*-------------------------------------------------------------------------------event delegation test------------------------------------------------------------------------------------------------------*/

let restaurantRenderAddElementToList = function (name, address, id, status, image) {
  document.getElementById("table").insertAdjacentHTML("afterbegin", template.restaurantListCardTemplate(name, address, id, status, image));
};

/*//////////////////////////////////////////////////////////////////////////////restaurantlist////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*-------------------------------------------------------------------------------2 menulist------------------------------------------------------------------------------------------------------*/

let menuRenderList = function (name, description, price) {
  document.getElementById("body").innerHTML = template.menuListBodyTemplate;

  document.getElementsByClassName("rest-searchbar")[0].addEventListener("input", menuSearchInput);

  document.getElementsByClassName("rest-lunch")[0].addEventListener("click", (e) => {
    let menucardHtml = e.target.closest(".menuCard");
    if (menucardHtml) {
      fetch.fetchMenuModal(renderMenuModal, menucardHtml.id);
    }
  });
};

let menuHeaderRenderToList = function (name, description, image, open_hours, close_hours, closing_days) {
  let opening_hours = open_hours[0] + open_hours[1] + ":" + open_hours[2] + open_hours[3];
  let closing_hours = close_hours[0] + close_hours[1] + ":" + close_hours[2] + close_hours[3];

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let closing_days_text = JSON.parse(closing_days).map((item) => {
    return weekday[item];
  });

  let closing_days_string = closing_days_text.join(", ");

  document.getElementsByClassName("rest-header")[0].insertAdjacentHTML("afterbegin", template.menuListHeaderTemplate(name, description, image, opening_hours, closing_hours, closing_days_string));
};

let menuRenderAddElementToList = function (image, name, description, price, id, group) {
  let menutableposition;
  let selectedhr;
  if (group === "Lunch") {
    menutableposition = 0;
    selectedhr = "rest-lunch-hr";
  }
  if (group === "Drink") {
    menutableposition = 1;
    selectedhr = "rest-drinks-hr";
  }
  if (group === "Desert") {
    menutableposition = 2;
    selectedhr = "rest-deserts-hr";
  }
  document.getElementById(selectedhr).classList.remove("hide");
  document.getElementsByClassName("menuTable")[menutableposition].classList.remove("hide");
  document.getElementsByClassName("menuTable")[menutableposition].insertAdjacentHTML("afterbegin", template.menuListCardTemplate(image, name, description, price, id));
};

let menuSearchInput = function (e) {
  const value = e.target.value.toLowerCase();
  //console.log(value);
  const menuName = [...document.getElementsByClassName("menuCard")];
  menuName.map((menu) => {
    if (!menu.getElementsByClassName("menuName")[0].innerText.toLowerCase().includes(value)) {
      menu.classList.add("hide");
    } else {
      menu.classList.remove("hide");
    }
  });
};

/*//////////////////////////////////////////////////////////////////////////////menulist////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*-------------------------------------------------------------------------------3 menudetails------------------------------------------------------------------------------------------------------*/

let renderMenuModal = function (product) {
  let quantity = 1;
  document.getElementById("body").insertAdjacentHTML("afterbegin", template.menuModalTemplate(product, quantity));
  document.getElementById("modal-wrapper").addEventListener("click", (e) => {
    console.log(e.target.id);
    //Remove Modal
    if (e.target.id === "modal-wrapper") {
      document.getElementById("modal-wrapper").remove();
    }
    //Decrease Quantity
    if (e.target.closest("#modal-quantity-values-removeQuantity")) {
      if (document.getElementById("modal-quantity-values-items").innerHTML > 1) {
        quantity--;
        document.getElementById("modal-quantity-values-items").innerHTML = quantity;
        document.getElementById("modal-quantity-price-total").innerHTML = quantity * product.price;
      }
    }
    //Increase Quantity
    if (e.target.closest("#modal-quantity-values-addQuantity")) {
      quantity++;
      document.getElementById("modal-quantity-values-items").innerHTML = quantity;
      document.getElementById("modal-quantity-price-total").innerHTML = quantity * product.price;
    }
    //send to cart
    if (e.target.closest("#modal-quantity-price")) {
      console.log("Product Added");
      cartContent(product, quantity);
      document.getElementById("modal-wrapper").remove();
      //abrir o carro
      shoppingcartRender();
    }
  });
};

/*//////////////////////////////////////////////////////////////////////////////menudetails////////////////////////////////////////////////////////////////////////////////////////////////////////*/
export { restaurantRenderAddElementToList, menuHeaderRenderToList, renderMenuModal, menuRenderAddElementToList };
/*//////////////////////////////////////////////////////////////////////////////menudetails////////////////////////////////////////////////////////////////////////////////////////////////////////*/
