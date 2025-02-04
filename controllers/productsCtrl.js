const products = require("../data/products"); //grab data

let nextProductId = 1;
products.forEach(function (product) { //loop through all the products,
  if (nextProductId => product._id) {
    nextProductId = product._id + 1; //make a variable that holds the id of the next product when we create it
  }
})

// For Handling GET /products
let list = (req, res) => {
  console.log("Inside the GET/ productsCtrl list()")
  res.json(products);
}

// For handling the POST/ product
let create = function (req, res) {
  console.log("inside the POST /products route", req.body);
  let newProducts = {
    _id: req.body._id, // you can also use  _id: Math.floor(Math.random()*100)  to generate a random ID 
    name: req.body.name,
    description: req.body.description
  }
  req.body._id = nextProductId;  //read in the data and assign an id to the product
  nextProductId++; //increment the varialbe holding the next id so when we add the next product, they dont get the same id
  products.push(newProducts);
 res.send("success"); //just to send that it worked
}

//Get products By Id function
let show = function (req, res) {
  //FILL THIS IN FOR THE ASSIGNMENT
  let idToLookFor = req.params.id;
  //loop through the users array,
  //and find the user with correct id
  let product = products.find = (element) => {
    if (element._id == idToLookFor) {
      return element;
    }
  }
    res.json(product);
}

//EXPORT THE 3 FUNCTIONS SO THEY CAN AVAILABLE TO THE ROUTES MODULE
module.exports = { list, show, create }; //to make these routes available