const comments = require("../data/comments"); //grab data

let nextCommentId = 1;
comments.forEach(function (comment) { //loop through all the comments,
  if (nextCommentId => comment._id) {
    nextCommentId = comment._id + 1; //make a variable that holds the id of the next comment when we create it
  }
})

// For Handling GET /comments
let list = (req, res) => {
  console.log("Inside the GET/ commentsCtrl list()")
  res.json(comments);
}


// For handling the POST/ comments
let create = function (req, res) {
  console.log("inside the POST /comments route", req.body);
  let newComments = {
    body: req.body.body
  }
  req.body._id = nextCommentId;  //read in the data and assign an id to the comments
  nextCommentId++; //increment the varialbe holding the next id so when we add the next comment, they dont get the same id
  comments.push(newComments);
  res.send("success"); //to show that it worked
}

//Get comments By Id function
let show = function (req, res) {
  console.log("Inside the commentsCtrl GET /comments:id route", req.params.id)
  //FILL THIS IN FOR THE ASSIGNMENT

  let idToLookFor = req.params.id;
  //loop through the users array,
  //and find the user with correct id
  let comment = comments.find = (element) => {
    if (element._id == idToLookFor) {
      return element;
    }
  }
    res.json(comment);
}

// MY ORIGINAL CODE BELOW (NOT AS EFFICIENT AS MY CODE ABOVE)
  // const foundId = comments.some(comment => comment._id == req.params.id) //does the user's params exist in the database? Need to find the id in the database. 
  // console.log("foundId = ", foundId)
  // if (foundId) {  //if found it will return res.send()
  //   res.send(comments.filter(comment => comment._id == req.params.id)[0])//will be able to show this in html as a text
  // } else {
  //   res.status(404).json({msg:"ID not in database"})
  // }


//EXPORT THE 3 FUNCTIONS SO THEY CAN AVAILABLE TO THE ROUTES MODULE
module.exports = { list, show, create }; //to make these routes available