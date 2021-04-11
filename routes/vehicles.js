const express = require('express')
const router = express.Router() //getting the router from express
const vehiclesCtrl = require("../controllers/vehiclesCtrl"); //whatever is being exported from the vehicles file is being put into variable {vehicles}

//GET /vehicles
//return all vehicles
router.get("/vehicles", vehiclesCtrl.list)
//POST /contacts
//DATA: json representation of the contact
//add a new contact to the contacts array
router.post("/vehicles", vehiclesCtrl.create);
//GET/contacts/:id
//returns a single contact with the matching id
router.get("/vehicles/:id",vehiclesCtrl.show);

module.exports = router; //need to export this router so that it becomes available to the rest of your code for example  --> const vehicles = require("./routes.vehicles");