const baseURL =
  "https://72c4-2001-8a0-7509-a300-31ed-f7ee-c848-841a.eu.ngrok.io";

function isRestaurantClosed(closingdays, open_hours, close_hours) {
  let currentDay = new Date().getDay();

  let currentHour = new Date().getHours();
  let currentMinutes = new Date().getMinutes();

  let localTime = "" + currentHour + currentMinutes;

  //let opening_hours = open_hours.split(':');
  //let closing_hours = close_hours.split(':');

  if (closingdays.includes(currentDay)) {
    return "Closed";
  }

  if (localTime > open_hours && localTime < close_hours) {
    return "Open";
  }

  return "Closed";
}

let restaurantFetch = function (callback) {
  fetch(baseURL + "/restaurants")
    .then((resp) => resp.json())
    .then((data) => {
      data.map((restaurant) => {
        callback(
          restaurant.name,
          restaurant.address,
          restaurant.ID,
          isRestaurantClosed(
            restaurant.closing_days,
            restaurant.open_hours,
            restaurant.close_hours
          ),
          restaurant.image
        );
      });
    });
};

let menuHeaderFetch = function (callback, id) {
  fetch(baseURL + "/restaurants/" + id)
    .then((resp) => resp.json())
    .then((data) => {
      callback(
        data.name,
        data.address,
        data.image,
        data.open_hours,
        data.close_hours,
        data.closing_days
      );
    });
};

let menuFetch = function (callback, id) {
  fetch(baseURL + "/restaurants/" + id + "/menu")
    .then((resp) => resp.json())
    .then((data) => {
      data.map((menu) => {
        console.log(menu.group);
        callback(
          menu.image,
          menu.name,
          menu.description,
          menu.price,
          menu.id,
          menu.group
        );
      });
    });
};

let fetchMenuModal = function (callback, id) {
  fetch(baseURL + "/products/" + id)
    .then((resp) => resp.json())
    .then((product) => {
      callback(product);
    });
};

export { restaurantFetch, menuHeaderFetch, fetchMenuModal, menuFetch };
