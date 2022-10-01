const db = require('../services/db');
const config = require('../config');

function getRestaurants() {
  
  const restaurants = db.query(`SELECT * FROM Restaurants INNER JOIN WorkingDays ON Restaurants.ID=WorkingDays.restaurant_id`, []);
  //console.log(data);
 //
  return restaurants
  
}

function getRestaurant(restaurantid){
  const restaurant = db.queryOne(`SELECT * FROM Restaurants INNER JOIN WorkingDays ON Restaurants.ID=WorkingDays.restaurant_id where ID=${restaurantid}`, []);
  console.log(restaurant);
  return restaurant;
}

function getMenu(restaurantid){
  const menu = db.query (`SELECT * FROM Product WHERE restaurant_id=${restaurantid}`, []);

  return menu;
}

//function validateCreate(restaurant) {
//  let messages = [];
//
//  console.log(restaurant);
//
//  if (!restaurant) {
//    messages.push('No object is provided');
//  }
//
//  if (!restaurant.name) {
//    messages.push('restaurant is empty');
//  }
//
//  if (!restaurant.author) {
//    messages.push('Author is empty');
//  }
//  
//  if (messages.length) {
//    let error = new Error(messages.join());
//    error.statusCode = 400;
//
//    throw error;
//  }
//}


/*  INSERT NEW RESTAURANT */
function create(restaurantObj) {
  //validateCreate(restaurantObj);
  const {name, address, open_hours, closing_hours, image} = restaurantObj;
  const result = db.run('INSERT INTO Restaurants (name, address, open_hours, closing_hours, image) VALUES (@name, @address, @open_hours, @closing_hours, @image)', {name, address, open_hours, closing_hours, image});
  
  let message = 'Error in creating restaurant';
  if (result.changes) {
    message = 'restaurant created successfully';
  }

  return {message};
}

/* TODO - UPDATE RESTAURANT */
/* TODO - UPDATE RESTAURANT */

/* TODO - DELETE RESTAURANT */
/* TODO - DELETE RESTAURANT */



module.exports = {
  getRestaurants,
  getRestaurant,
  getMenu,
  create
}