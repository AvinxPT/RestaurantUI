//import {
//  menuModalTemplate,
//  restaurantlistTemplate,
//  restaurantListCardTemplate,
//  menuListCardTemplate,
//  menuListHeaderTemplate,
//  menuListBodyTemplate
//} from "./template.js";

import * as template from "./template.js";

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
  //restaurantRenderList();
  //restaurantFetch(restaurantRenderAddElementToList);
  menuRenderList();
  fetch.menuFetch(menuRenderAddElementToList);
  fetch.menuHeaderFetch(menuHeaderRenderToList);

  //renderMenuModal();
  //fetch.fetchMenuModal(renderMenuModal);
};

/*-------------------------------------------------------------------------------testes------------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------1 restaurantlist------------------------------------------------------------------------------------------------------*/
let restaurantRenderList = function () {
  console.log("restaurantRenderList");
  document.getElementById("body").innerHTML = template.restaurantlistTemplate;
  document
    .getElementsByClassName("searchBar")[0]
    .addEventListener("input", searchInput);
  document.getElementById("table").addEventListener("click", (e) => {
    //window.location.href = "/restaurant/" + e.target.closest(".card").id;
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
    if (!card.getElementsByClassName("restName")[0].innerText.includes(value)) {
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

let restaurantRenderAddElementToList = function (name, address, id) {
  document
    .getElementById("table")
    .insertAdjacentHTML(
      "afterbegin",
      template.restaurantListCardTemplate(name, address, id)
    );
};

/*//////////////////////////////////////////////////////////////////////////////restaurantlist////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*-------------------------------------------------------------------------------2 menulist------------------------------------------------------------------------------------------------------*/

let menuRenderList = function (name, description, price) {
  document.getElementById("body").innerHTML = template.menuListBodyTemplate;
  //document.getElementsByClassName("rest-header")[0].innerHTML = template.menuListHeaderTemplate;
  //document.getElementsByClassName("menuTable")[0].innerHTML = template.menuListCardTemplate("http://placekitten.com/200/200","joao","Gatao", "19,90") + menuListCard("http://placekitten.com/200/200","Manel","Gatinhos", "19,90");
  document
    .getElementsByClassName("rest-searchbar")[0]
    .addEventListener("input", menuSearchInput);
  document
    .getElementsByClassName("menuTable")[0]
    .addEventListener("click", (e) => {
      console.log(e.target.closest(".menuCard").id);
      fetch.fetchMenuModal(e.target.closest(".menuCard").id);
    });
};

let menuHeaderRenderToList = function (name, description, image) {
  document
    .getElementsByClassName("rest-header")[0]
    .insertAdjacentHTML(
      "afterbegin",
      template.menuListHeaderTemplate(name, description, image)
    );
};

let menuRenderAddElementToList = function (
  image,
  name,
  description,
  price,
  id
) {
  document
    .getElementsByClassName("menuTable")[0]
    .insertAdjacentHTML(
      "afterbegin",
      template.menuListCardTemplate(image, name, description, price, id)
    );
};

let menuSearchInput = function (e) {
  const value = e.target.value.toLowerCase();
  //console.log(value);
  const menuName = [...document.getElementsByClassName("menuCard")];
  menuName.map((menu) => {
    if (
      !menu
        .getElementsByClassName("menuName")[0]
        .innerText.toLowerCase()
        .includes(value)
    ) {
      menu.classList.add("hide");
    } else {
      menu.classList.remove("hide");
    }
  });
};

/*//////////////////////////////////////////////////////////////////////////////menulist////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*-------------------------------------------------------------------------------3 menudetails------------------------------------------------------------------------------------------------------*/

let renderMenuModal = function (image, name, description, price) {
  let quantity = 1;
  document
    .getElementById("body")
    .insertAdjacentHTML(
      "afterbegin",
      template.menuModalTemplate(image, name, description, quantity, price)
    );
  document.getElementById("modal-wrapper").addEventListener("click", (e) => {
    if (e.target.id === "modal-wrapper") {
      document.getElementById("modal-wrapper").remove();
    }
  });
  document
    .getElementById("modal-quantity-values-removeQuantity")
    .addEventListener("click", (e) => {
      if (
        document.getElementById("modal-quantity-values-items").innerHTML > 1
      ) {
        quantity--;
        document.getElementById(
          "modal-quantity-values-items"
        ).innerHTML = quantity;
        document.getElementById("modal-quantity-price-total").innerHTML =
          quantity * price;
      }
    });
  document
    .getElementById("modal-quantity-values-addQuantity")
    .addEventListener("click", (e) => {
      quantity++;
      document.getElementById(
        "modal-quantity-values-items"
      ).innerHTML = quantity;
      document.getElementById("modal-quantity-price-total").innerHTML =
        quantity * price;
    });
};

/*//////////////////////////////////////////////////////////////////////////////menudetails////////////////////////////////////////////////////////////////////////////////////////////////////////*/
export {
  restaurantRenderAddElementToList,
  menuHeaderRenderToList,
  renderMenuModal,
  menuRenderAddElementToList
};
/*//////////////////////////////////////////////////////////////////////////////menudetails////////////////////////////////////////////////////////////////////////////////////////////////////////*/
