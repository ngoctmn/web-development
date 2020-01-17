// jshint esversion: 6
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data entry, no name specified!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

// fruit.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 5,
//     review: "The best fruit"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Too sour for me"
// });
// const banana = new Fruit({
//     name: "Banana",
//     rating: 3,
//     review: "Weird texture"
// });


// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });


const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});

// pineapple.save();

const mango = new Fruit({
    name: "Mango",
    score: 6,
    review: "Decent fruit."
});

mango.save();


// Fruit.find(function (err, fruits) {
//     if (err) {
//         console.log(err);

//     } else {
//         mongoose.connection.close();

//         fruits.forEach(function (fruit) {
//             console.log(fruit.name);
//         });

//     }
// });


// Fruit.updateOne({
//     _id: "5dc231ac47980706ade6011d"
// }, {
//     rating: 8
// }, function (err) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log("Successfully updated the document.");

//     }
// });


// Fruit.deleteOne({
//     name: "Orange"
// }, function (err) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log("Successfully deleted the document!");
//     }
// });


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save();

const amy = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});

// amy.save();


Person.updateOne({
    name: "John"
}, {
    favouriteFruit: mango
}, function (err) {
    if (err) {
        console.log(err);

    } else {
        console.log("Successfully updated the document!");
    }
});


// Person.deleteMany({
//     name: "John"
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document!");
//     }
// });