const contacts = require("../data/contacts"); //grab data


let nextContactId = 1;
contacts.forEach(function (contact) { //loop through all the contacts,
  if (nextContactId => contact._id) {
    nextContactId = contact._id + 1; //make a variable that holds the id of the next contact when we create it
  }
})

// For Handling GET /contacts
let list = (req, res) => {
  // console.log("Inside the contactsCtrl list()")
  res.json(contacts);
}


// For handling the POST/ contact
let create = function (req, res) {
  // console.log("inside the POST /contacts route", req.body);
  let newContacts = {
    _id: req.body._id,
    name: req.body.name,
    occupation: req.body.occupation
  }
  req.body._id = nextContactId;  //read in the data and assign an id to the contact
  nextContactId++; //increment the varialbe holding the next id so when we add the next contact, they dont get the same id
  contacts.push(newContacts);
  res.json(contacts); //just to send that it worked
}

//Get contacts By Id function
let show = function (req, res) {

  //FILL THIS IN FOR THE ASSIGNMENT
  const foundId = contacts.some(contact => contact._id == req.params.id) //does the user's params exist in the database? Need to find the id in the database. 
  if (foundId) {  //if found it will return res.send()
    res.send(contacts.filter(contact => contact._id == req.params.id))//will be able to show this in html as a text
  } else {
    res.status(404).json({msg:"ID not in database"})
  }
}

//EXPORT THE 3 FUNCTIONS SO THEY CAN AVAILABLE TO THE ROUTES MODULE
module.exports = { list, show, create }; //to make these routes available