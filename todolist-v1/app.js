// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
// Set up EJS
app.set('view engine', 'ejs');

// Set up body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

// Set up static folder for express
app.use(express.static("public"));


// Redirect to home / route
app.get("/", (req, res) => {

    const day = date.getDate();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

// Redirect to /work route
app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

// Redirect to /about route
app.get("/about", (req, res) => {
    res.render("about");
});

// == See code here first -- Request
app.post("/", (req, res) => {

    const item = req.body.newItem;

    if (req.body.typeOfList === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});


// Server Port
app.listen(3000, () => console.log("Server started on port 3000"));