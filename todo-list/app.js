var express = require("express");
var bodyParser = require("body-parser");
// var mongoose = require("mongoose");

var app = express();

app.get("/", function(req, res){
	res.render("todo_list.ejs");
})

app.listen(3000, function(){
	console.log("server has started");
})

