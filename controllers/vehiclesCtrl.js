const vehicles = require("../data/vehicles"); //grab data

let nextVehicleId = 1;
vehicles.forEach(function (vehicle) { //loop through all the vehicle,
  if (nextVehicleId => vehicle._id) {
    nextVehicleId = vehicle._id + 1; //make a variable that holds the id of the next vehicle when we create it
  }
})

// For Handling GET /vehicleCtrl
let list = (req, res) => {
  console.log("Inside the GET/ vehiclesCtrl list()")
  res.json(vehicles);
}


// For handling the POST/ vehicle
let create = function (req, res) {
  console.log("inside the POST /contacts route", req.body);
  let newVehicles = {
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  }
  req.body._id = nextVehicleId;  //read in the data and assign an id to the vehicle
  nextVehicleId++; //increment the varialbe holding the next id so when we add the next vehicle, they dont get the same id
  vehicles.push(newVehicles);
  res.send("success"); //just to send that it worked
}

//Get vehicles By Id function
let show = function (req, res) {
  console.log("Inside the vehiclesCtrl GET /vehicles:id route", req.params)
  //FILL THIS IN FOR THE ASSIGNMENT

  let idToLookFor = req.params.id;
  //loop through the users array,
  //and find the user with correct id
  let vehicle = vehicles.find = (element) => {
    if (element._id == idToLookFor) {
      return element;
    }
  }
    res.json(vehicle);
}

// MY ORIGINAL CODE BELOW (NOT AS EFFICIENT AS MY CODE ABOVE)
  // const foundId = vehicles.some(vehicle => vehicles._id == req.params.id) //does the user's params exist in the database? Need to find the id in the database. 
  // if (foundId) {  //if found it will return res.send()
  //   console.log("foundId = ", foundId)
  //   res.send(vehicles.filter(vehicle => vehicles._id == req.params.id))//will be able to show this in html as a text
  // } else {
  //   res.status(404).json({msg:"ID not in database"})
  // }


//EXPORT THE 3 FUNCTIONS SO THEY CAN AVAILABLE TO THE ROUTES MODULE
module.exports = { list, show, create }; //to make these routes available