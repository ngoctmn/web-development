//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// Calculate
app.get("/calculator", function (req, res) {
    res.sendFile(__dirname + "/calculator.html");
});

app.post("/calculator.html", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is " + result);
});

// Calculate BMI
app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});

// Server POST
app.listen(3000, function () {
    console.log("Server started on port 3000");
});