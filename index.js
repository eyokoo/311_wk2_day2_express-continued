const express = require("express");
const app = express();

app.use(express.static("./public")); //adding the static routes

const bodyParser = require("body-parser"); //by default this app should be assuming request body data as json
app.use(bodyParser.json());


//ROUTES
app.use(require("./routes/contacts"));
app.use(require("./routes/comments"));
app.use(require("./routes/vehicles"));
app.use(require("./routes/products"));

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});




// IN CLASS PRACTICE
// app.get("/hi", function (req, res) {
//   console.log("inside my GET /hi route");
//   res.json("hello");
// })

// // this rest endpoint accepts a json object that holds
// //num1 and num2 as integers/keys
// //this endpoint will return the sum for those 2 numbers
// app.post("/add", function (req, res) {
//   console.log("inside my POST /add route", req.body);

//   let sum = req.body.num1 + req.body.num2 
//    res.json("the sum is "+ sum);
//    // add app.use(bodyParser.json()) up at the top
//   })
