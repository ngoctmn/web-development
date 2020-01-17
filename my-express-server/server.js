//jshint esversion:6
const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.send('Welcome to server');
});

app.get("/about", function (req, res) {
	res.send('This is test server');
});

app.listen(3000, function () {
	console.log("Server started on post 3000");
});