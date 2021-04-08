const express = require('express')
const router = express.Router() //getting the router from express
const productsCtrl = require("../controllers/productsCtrl"); //whatever is being exported from the products file is being put into variable {products}



//GET /contacts
//return all contacts

router.get("/products", productsCtrl.list)
  //POST /contacts
  //DATA: json representation of the contact
  //add a new contact to the contacts array
  router.post("/products", productsCtrl.create);

  //GET/contacts/:id
  //returns a single contact with the matching id
  router.get("/products", productsCtrl.show);
  
  module.exports = router; //need to export this router so that it becomes available to the rest of your code for example  --> const contacts = require("./routes.contacts");
  