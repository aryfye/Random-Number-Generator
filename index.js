const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const diceImage = document.getElementById("diceImage");
const min = 1;
const max = 100; 
let randomNum;

function rollDice() {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}

myButton.onclick = rollDice;
diceImage.onclick = rollDice;