const express = require('express');
const router = express.Router();
const product = require('../services/product');

/* GET quotes listing. */
router.get('/', function(req, res) {
  try {
    res.json(product.getProducts());
  } catch(err) {
    console.error(`Error while getting restaurants `, err.message);
  }
});

router.get('/:id', function (req, res){
  try{
    res.json(product.getProduct(req.params.id));
  } catch(err) {
    console.error('Error getting Product ', err.message);
  }
});

/* GET single Restaurant  */
//router.get('/:id', function (req, res){
//  try{
//    res.json(restaurants.getSingleRestaurant(req.params.id));
//  } catch(err) {
//    console.error('Error getting id ', err.message);
//  }
//})


/* POST quote */
//router.post('/', function(req, res, next) {
//  try {
//    res.json(quotes.create(req.body));
//  } catch(err) {
//    console.error(`Error while adding quotes `, err.message);
//    next(err);
//  }
//});

module.exports = router;