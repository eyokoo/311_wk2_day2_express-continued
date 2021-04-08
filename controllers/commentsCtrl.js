const comments = require("../data/comments"); //grab data

let nextCommentId = 1;
comments.forEach(function (comment) { //loop through all the comments,
  if (nextCommentId => comment._id) {
    nextCommentId = comment._id + 1; //make a variable that holds the id of the next comment when we create it
  }
})

// For Handling GET /contacts
let list = (req, res) => {
  // console.log("Inside the commentsCtrl list()")
  res.json(comments);
}


// For handling the POST/ comments
let create = function (req, res) {
  // console.log("inside the POST /comments route", req.body);
  let newComments = {
    body: req.body.body
  }
  contacts.push(newComments);
  res.json(comments); //just to send that it worked
}

//Get contacts By Id function
let show = function (req, res) {

  //FILL THIS IN FOR THE ASSIGNMENT
  const foundId = comments.some(comment => comment._id == req.params.id) //does the user's params exist in the database? Need to find the id in the database. 
  if (foundId) {  //if found it will return res.send()
    res.send(comments.filter(comment => comment._id == req.params.id))//will be able to show this in html as a text
  } else {
    res.status(404).json({msg:"ID not in database"})
  }
}

//EXPORT THE 3 FUNCTIONS SO THEY CAN AVAILABLE TO THE ROUTES MODULE
module.exports = { list, show, create }; //to make these routes available