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
  restaurantRenderList();
  fetch.restaurantFetch(restaurantRenderAddElementToList);

  //menuRenderList();
  //fetch.menuFetch(menuRenderAddElementToList, 1);
  //fetch.menuHeaderFetch(menuHeaderRenderToList, 1);

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
    console.log(e.target.closest(".card").id);
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

let restaurantRenderAddElementToList = function (
  name,
  address,
  id,
  status,
  image
) {
  document
    .getElementById("table")
    .insertAdjacentHTML(
      "afterbegin",
      template.restaurantListCardTemplate(name, address, id, status, image)
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
      fetch.fetchMenuModal(renderMenuModal, e.target.closest(".menuCard").id);
    });
};

let menuHeaderRenderToList = function (
  name,
  description,
  image,
  open_hours,
  close_hours,
  closing_days
) {
  let opening_hours =
    open_hours[0] + open_hours[1] + ":" + open_hours[2] + open_hours[3];
  let closing_hours =
    close_hours[0] + close_hours[1] + ":" + close_hours[2] + close_hours[3];

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let closing_days_text = JSON.parse(closing_days).map((item) => {
    return weekday[item];
  });

  let closing_days_string = closing_days_text.join(", ");

  document
    .getElementsByClassName("rest-header")[0]
    .insertAdjacentHTML(
      "afterbegin",
      template.menuListHeaderTemplate(
        name,
        description,
        image,
        opening_hours,
        closing_hours,
        closing_days_string
      )
    );
};

let menuRenderAddElementToList = function (
  image,
  name,
  description,
  price,
  id,
  group
) {
  let menutableposition;
  if (group === "Lunch") {
    menutableposition = 0;
    document.getElementById("rest-lunch-hr").classList.remove("hide");
    document
      .getElementsByClassName("menuTable")
      [menutableposition].classList.remove("hide");
  }
  if (group === "Drink") {
    menutableposition = 1;
    document.getElementById("rest-drinks-hr").classList.remove("hide");
    document
      .getElementsByClassName("menuTable")
      [menutableposition].classList.remove("hide");
  }
  if (group === "Desert") {
    menutableposition = 2;
    document.getElementById("rest-deserts-hr").classList.remove("hide");
    document
      .getElementsByClassName("menuTable")
      [menutableposition].classList.remove("hide");
  }
  document
    .getElementsByClassName("menuTable")
    [menutableposition].insertAdjacentHTML(
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
