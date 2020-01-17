// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    var crypto = req.body.crypto;
    var fiat = req.body.fiat;

    //==Choose 1 of 2 code below
    //== Code 1:
    var amount = req.body.amount;

    var option = {
        url: "https://apiv2.bitcoinaverage.com/convert/global",
        method: "GET",
        qs: {
            from: crypto,
            to: fiat,
            amount: amount
        }
    };
    request(option, function (error, response, body) {
        var data = JSON.parse(body);
        var price = data.price;

        console.log(price);

        var currentDate = data.time;
        res.write("<p>The current date is " + currentDate + "</p>");
        res.write("<h1>" + amount + crypto + " is currently worth " + price + fiat + "</h1>");
        res.send();
    });

});


//==End COde 1

//==Code 2:
// var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
// var finalURL = baseURL + crypto + fiat;
// console.log(req.body.crypto);
// request(finalURL,
// function (error, response, body) {
// console.log(response.statusCode);
// console.log(body);

// var data = JSON.parse(body);
// var price = data.last;

// var currentDate = data.display_timestamp;
// console.log(price);
// res.write("<p>The current date is " + currentDate + "</p>");
// res.write("<h1>The current price of " + crypto + " is " + price + fiat + "</h1>");
// res.send();
// });
// });
//==End Code 2

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});