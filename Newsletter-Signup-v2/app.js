// jshint esversion: 6
const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => res.sendFile(__dirname + '/signup.html'));

app.post("/", (req, res) => {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName + lastName + email);

    var data = {
        email_address: email,
        status: "subscribed",
        "merge_fields": {
            "FNAME": firstName,
            "LNAME": lastName
        }
    };

    var jsonData = JSON.stringify(data);

    var options = {
        url: "https://us5.api.mailchimp.com/3.0/lists/56a33e6bed/members/",
        method: "POST",
        headers: {
            "Authorization": "non 1528127c630acab4b133511d5a589988 - us5"
        },
        body: jsonData
    };

    request(options, function (error, response, body) {
        // if (error) {
        //     console.log(error);
        // } else {
        //     console.log(response.statusCode);
        // }
        if (error) {
            res.sendFile(__dirname + "/failure.html");
        } else {
            if (response.statusCode === 200) {
                res.sendFile(__dirname + "/success.html");
            } else {
                res.sendFile(__dirname + "/failure.html");
            }
        }
    });
});

app.post("/failure", (req, res) => res.redirect("/"));

const port = 3000;
app.listen(process.env.PORT || port, () => console.log(`App listening on port 3000`));

//API KEY: 1528127c630acab4b133511d5a589988 - us5
//LIST ID: 56a33e6bed