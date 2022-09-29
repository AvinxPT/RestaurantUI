const baseURL =
  "https://d4ab-2001-8a0-7509-a300-8cd4-a2b3-e825-91fb.eu.ngrok.io";

let restaurantFetch = function (callback) {
  fetch(baseURL + "/restaurants")
    .then((resp) => resp.json())
    .then((data) => {
      data.map((restaurant) => {
        callback(restaurant.name, restaurant.address, restaurant.ID);
      });
    });
};

let menuHeaderFetch = function (callback, id) {
  fetch(baseURL + "/restaurants/" + id)
    .then((resp) => resp.json())
    .then((data) => {
      callback(data.name, data.address, data.image);
    });
};

let menuFetch = function (callback, id) {
  fetch(baseURL + "/restaurants/" + id + "/menu")
    .then((resp) => resp.json())
    .then((data) => {
      data.map((menu) => {
        // console.log(menu.sales[0].description);
        callback(menu.image, menu.name, menu.description, menu.price, menu.id);
      });
    });
};

let fetchMenuModal = function (callback, id) {
  fetch(baseURL + "/products/" + id)
    .then((resp) => resp.json())
    .then((data) => {
      callback(data.image, data.name, data.description, data.price);
    });
};

export { restaurantFetch, menuHeaderFetch, fetchMenuModal, menuFetch };
