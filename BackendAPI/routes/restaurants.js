const express = require('express');
const router = express.Router();
const restaurants = require('../services/restaurants');

/* GET ALL RESTAURANTS */
router.get('/', function(req, res) {
  try {
    res.json(restaurants.getRestaurants());
  } catch(err) {
    console.error(`Error while getting restaurants `, err.message);
  }
});

/* GET ALL MENUS */
router.get('/:id/menu', function (req, res){
  try{
    res.json(restaurants.getMenu(req.params.id));
  } catch(err) {
    console.error('Error getting id ', err.message);
  }
})


/* GET single Restaurant  */
router.get('/:id', function (req, res){
  try{
    res.json(restaurants.getRestaurant(req.params.id));
  } catch(err) {
    console.error('Error getting id ', err.message);
  }
})


/* POST -- ADD NEW RESTAURANT */
router.post('/', function(req, res) {
  try {
    console.log(req.body);
    res.json(restaurants.create(req.body));
  } catch(err) {
    console.error(`Error while adding quotes `, err.message);
  }
});

module.exports = router;