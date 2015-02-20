var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var database = require("./config/database");

var app = express();
var router = express.Router();

mongoose.connect(database.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

require("./app/routes.js")(router, app);

var port = process.env.PORT || 8080;

var server = app.listen(port);
console.log("Magic happens on port " + port);
