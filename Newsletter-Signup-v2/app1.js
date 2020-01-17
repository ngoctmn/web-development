// jshint esversion: 6
const express = require('express');
const bodyParser = require("body-parser");
const request = require('superagent'); // doi e xiu
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => res.sendFile(__dirname + '/signup.html'));

var mailchimpInstance = 'us5',
    listUniqueId = '56a33e6bed',
    mailchimpApiKey = '1528127c630acab4b133511d5a589988 - us5';
//https://us5.api.mailchimp.com/3.0/lists
app.post('/', function (req, res) {
    request
        .post('https://us5.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer.alloc('any:' + mailchimpApiKey).toString('base64'))
        .send({
            'email_address': req.body.email,
            'status': 'subscribed',
            'merge_fields': {
                'FNAME': req.body.fName,
                'LNAME': req.body.lName
            }
        })
        .end(function (err, response) {
            if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
            } else {
                res.send('Sign Up Failed :(');
            }
        });
});
// undo



const port = 3000;
app.listen(port, () => console.log(`App listening on port 3000`));

// 1528127c630acab4b133511d5a589988 - us5

// 56a33e6bed