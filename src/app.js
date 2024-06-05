const fs = require("fs"); 
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending all the products to client here
app.get("/api/v1/products", (req, res) =>{
  const {id} = req.params;
  const product = products.find(product => product.id === parseInt(id));
  if(product){
    res.status(200).json({
            status: 'success',
            message: 'Product fetched successfully',
            data: {
                name: product
            }
        });
  }else{
     res.status(404).json({
            status: 'failed',
            message: 'Product not found'
        });
  }
})
// Endpoint - /api/v1/products

module.exports = app;
