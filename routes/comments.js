const express = require('express')
const router = express.Router() //getting the router from express
const commentsCtrl = require("../controllers/commentsCtrl"); //whatever is being exported from the contacts file is being put into variable {comments}


router.get("/comments", commentsCtrl.list)

router.post("/comments", commentsCtrl.create);

router.get("/comments/:id", commentsCtrl.show);

module.exports = router; //need to export this router so that it becomes available to the rest of your code for example  --> const comments = require("./routes.comments");