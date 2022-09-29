const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const port = 3000 || process.env.PORT;

app.use(cors());

//const quotesRouter = require('./routes/quotes');
const restaurantRouter = require('./routes/restaurants');
const productRouter = require('./routes/product');


app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

//app.use('/quotes', quotesRouter);
app.use('/restaurants', restaurantRouter);
app.use('/products', productRouter);





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});