const express = require('express')
const router = express.Router() //getting the router from express
const contactsCtrl = require("../controllers/contactsCtrl"); //whatever is being exported from the contacts file path is being put into variable {contacts}

//GET /contacts
//return all contacts
router.get("/contacts", contactsCtrl.list)
//POST /contacts
//DATA: json representation of the contact
//add a new contact to the contacts array
router.post("/contacts", contactsCtrl.create);
//GET/contacts/:id
//returns a single contact with the matching id
router.get("/contacts/:id", contactsCtrl.show);

module.exports = router; //need to export this router so that it becomes available to the rest of your code for example  --> const contacts = require("./routes.contacts");


