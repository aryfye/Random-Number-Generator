// get references to the elements
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const diceImage = document.getElementById("diceImage");

// set min and max values for random number
const min = 1;
const max = 100; 

// function to generate and display a random number
function rollDice() {
    const randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}

// attach event listeners to the button and image
myButton.onclick = rollDice;
diceImage.onclick = rollDice;
