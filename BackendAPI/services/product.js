const db = require('../services/db');
const config = require('../config');


/* GET ALL PRODUCTS */
function getProducts() {
  
  const products = db.query(`SELECT * FROM Product`, []);
 
  return products;
}

function getProduct(productid){
  const product = db.queryOne(`SELECT * From Product WHERE id=${productid}`, []);
  return product;
}


/* TODO - ADD 1 PRODUCT */

/* TODO - CHANGE 1 PRODUCT */

/* TODO - DELETE 1 PRODUCT */



//function validateCreate(quote) {
//  let messages = [];
//
//  console.log(quote);
//
//  if (!quote) {
//    messages.push('No object is provided');
//  }
//
//  if (!quote.quote) {
//    messages.push('Quote is empty');
//  }
//
//  if (!quote.author) {
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

//function create(quoteObj) {
//  validateCreate(quoteObj);
//  const {quote, author} = quoteObj;
//  const result = db.run('INSERT INTO quote (quote, author) VALUES (@quote, @author)', {quote, author});
//  
//  let message = 'Error in creating quote';
//  if (result.changes) {
//    message = 'Quote created successfully';
//  }
//
//  return {message};
//}

module.exports = {
  getProducts,
  getProduct,
  //create
}