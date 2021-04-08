const express = require('express')
const router = express.Router() //getting the router from express
const contactsCtrl = require("../controllers/contactsCtrl"); //whatever is being exported from the contacts file is being put into variable {contacts}