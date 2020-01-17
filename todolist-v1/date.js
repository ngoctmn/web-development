// jshint esversion: 6

exports.getDate = () => {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
};

exports.getDay = () => {
    const today = new Date();
    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
};

// ==Comment code above to use code below

// let today = new Date();
// let currentDay = today.getDay();
// let day = "";

//== Code 1:
// if (currentDay === 0 || currentDay === 6) {
//     day = "weekend";
// } else {
//     day = "weekday";
// }

//==Code 2:
// switch (currentDay) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
//     default:
//         console.log("Error: current day is equal to: " + currentDay);
//         break;
// }