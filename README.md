# Dice Roller

## Description
A simple web application that generates a random number between 1 and 100 when you click the dice image or the button. The generated number is displayed on the screen.

## Features
- Displays a random number between 1 and 100.
- Updates the displayed number each time the button or dice image is clicked.
- Styled with a clear and engaging user interface.

## Technologies Used
- HTML
- CSS
- JavaScript

## Usage
1. Open `index.html` in your web browser.
2. Click the button or the dice image to generate a random number.

## How to Run
1. Clone the repository or download the project files.
2. Open `index.html` in any web browser.
3. Click the button or the dice image to see a random number.

## JavaScript Explanation
The `index.js` file contains the following:

### Variables
- **myButton**: References the button element.
- **myLabel**: References the label element where the random number will be displayed.
- **diceImage**: References the image element.
- **min**: The minimum value for the random number (1).
- **max**: The maximum value for the random number (100).

### Function: rollDice
- **Purpose**: Generates and displays a random number between 1 and 100.
- **Functionality**:
  - Uses `Math.random()` to generate a random number.
  - Uses `Math.floor()` to round down to the nearest whole number.
  - Updates the text content of `myLabel` with the generated random number.

```javascript
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
```
<br>

![rolldice](https://github.com/user-attachments/assets/ef6cac74-a8a6-42a5-8bc6-4ee946b51fa3)

