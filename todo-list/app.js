var express = require("express");
var bodyParser = require("body-parser");
// var mongoose = require("mongoose");

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);

var app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("todo_list.ejs");
})

app.listen(3000, function(){
	console.log("server has started");
})

