const vehicles = require("../data/vehicles"); //grab data

let nextVehicleId = 1;
vehicles.forEach(function (vehicle) { //loop through all the vehicle,
  if (nextVehicleId => vehicle._id) {
    nextVehicleId = vehicle._id + 1; //make a variable that holds the id of the next vehicle when we create it
  }
})

// For Handling GET /vehicle
let list = (req, res) => {
  // console.log("Inside the vehiclesCtrl list()")
  res.json(vehicles);
}


// For handling the POST/ contact
let create = function (req, res) {
  // console.log("inside the POST /contacts route", req.body);
  let newVehicles = {
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  }
  vehicles.push(newVehicles);
  res.json(vehicles); //just to send that it worked
}

//Get contacts By Id function
let show = function (req, res) {

  //FILL THIS IN FOR THE ASSIGNMENT
  const foundId = vehicles.some(vehicle => vehicles._id == req.params.id) //does the user's params exist in the database? Need to find the id in the database. 
  if (foundId) {  //if found it will return res.send()
    res.send(vehicles.filter(vehicle => vehicles._id == req.params.id))//will be able to show this in html as a text
  } else {
    res.status(404).json({msg:"ID not in database"})
  }
}


//EXPORT THE 3 FUNCTIONS SO THEY CAN AVAILABLE TO THE ROUTES MODULE
module.exports = { list, show, create }; //to make these routes available