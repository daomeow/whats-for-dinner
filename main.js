//////////////////////////////////////
// Global variables
//////////////////////////////////////  
/**
 * How could your rewrite this without global variables?
 */
var side = document.querySelector('#side');
var main = document.querySelector('#main-dish');
var dessert = document.querySelector('#dessert');
var meal = document.querySelector('#entire-meal');
var cookButton = document.querySelector('.button2');
var radios = document.getElementsByName('dish');

//////////////////////////////////////
// Event Listener
//////////////////////////////////////
//! Very happy you're not a lazy dev and are spelling out "event" 🙂
cookButton.addEventListener('click', function(event) {

  event.preventDefault();
  getRandomDish();
})

//////////////////////////////////////
// Functions
//////////////////////////////////////
//! These types of comments are awesome! Smart use of a "helper" function as well!
// Retrieve random number from array 
function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

// Return radio button input and access the appropriate array 
function getRandomDish() {
  /**
   * Can you move these somewhere else so they're only scoped to where they're used?
   */
  var randomDish;
  var randomNum;
  var userInput;
  var dishString = '';
  var randomMain = '';
  var randomSide = '';
  var randomDessert = '';
  var entireMeal;

  /**
   * How else could you get this element without looping through all of the radio inputs?
   */
  // Loop through radio buttons to return user selected radio ID
  for (var i = 0; i < radios.length; i++) {  
    if (radios[i].checked) {
      userInput = radios[i].id;
    }  
  }

  /**
   * Refactor the "if" block to it's own function and the "else" block to it's own function
   */
  // Display dish or entire meal based on user input 
  if (userInput === 'entire-meal') {
    randomMain = food.main[(getRandomNumber(food.main))];
    randomSide = food.side[(getRandomNumber(food.side))];
    randomDessert = food.dessert[(getRandomNumber(food.dessert))];  
    
    entireMeal = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`;
    document.querySelector('h2').innerHTML = entireMeal;  
  } else {
    randomNum = getRandomNumber(food[userInput]);
    randomDish = food[userInput][randomNum];
    dishString = `${randomDish}!`;
    document.querySelector('h2').innerHTML = dishString;
  }
  
  // Hide cook-pot picture and display suggestion message 
  document.querySelector('.suggestion').style.display = 'block';
  document.querySelector('.img2').style.display = 'none'; 
}


