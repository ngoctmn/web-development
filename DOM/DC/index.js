var randomDice1 = Math.floor(Math.random() * 6) + 1;
var diceFile1 = "images/dice" + randomDice1 + ".png";
//var image1 = document.querySelector("img")[0].setAttribute("src",diceFile1);
document.querySelectorAll("img")[0].setAttribute("src", diceFile1);

var randomDice2 = Math.floor(Math.random() * 6) + 1;
var diceFile2 = "images/dice" + randomDice2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceFile2);



if (randomDice1 > randomDice2) {
	document.querySelector("h1").innerHTML = "Player 1 win";
}
else if (randomDice2 > randomDice1) {
	document.querySelector("h1").innerHTML = "Player 2 win";
}
else {
	document.querySelector("h1").innerHTML = "Draw";
}