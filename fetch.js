let restaurantFetch = function (callback) {
  fetch("https://api.npoint.io/15c6f9ec5c60bad77576")
    .then((resp) => resp.json())
    .then((data) => {
      data.restaurantList.map((restaurant) => {
        callback(restaurant.name, restaurant.address, restaurant.id);
      });
    });
};

let menuHeaderFetch = function (callback) {
  fetch("https://api.npoint.io/15c6f9ec5c60bad77576")
    .then((resp) => resp.json())
    .then((data) => {
      callback(
        data.restaurantList[0].name,
        data.restaurantList[0].description,
        data.restaurantList[0].img
      );
    });
};

let menuFetch = function (callback) {
  fetch("https://api.npoint.io/60f7ccfde47df4ebd2e4")
    .then((resp) => resp.json())
    .then((data) => {
      data.menuList.map((menu) => {
        // console.log(menu.sales[0].description);
        callback(
          menu.image,
          menu.name,
          menu.sales[0].description,
          menu.price,
          menu.id
        );
      });
    });
};

let fetchMenuModal = function (callback, id) {
  fetch("https://api.npoint.io/60f7ccfde47df4ebd2e4")
    .then((resp) => resp.json())
    .then((data) => {
      let filteredData = data.menuList.filter((menuItem) => {
        return menuItem.id === id;
      });
      if (filteredData.length === 1) {
        callback(
          filteredData[0].image,
          filteredData[0].name,
          filteredData[0].sales[0].description,
          filteredData[0].sales[0].price
        );
      }
    });
};

export { restaurantFetch, menuHeaderFetch, fetchMenuModal, menuFetch };
