//////////////////////////////////////
// Global variables
//////////////////////////////////////  
/**
 * How could your rewrite this without global variables?
 */
//! The first four aren't used in your code and can be removed
// var side = document.querySelector('#side');
// var main = document.querySelector('#main-dish');
// var dessert = document.querySelector('#dessert');
// var meal = document.querySelector('#entire-meal');

//! Moved to the event listener
// var cookButton = document.querySelector('.button2');

//! Not needed because of new `userInput` variable
// var radios = document.getElementsByName('dish');

//////////////////////////////////////
// Event Listener
//////////////////////////////////////
//! Very happy you're not a lazy dev and are spelling out "event" 🙂
document.querySelector('.button2').addEventListener('click', function(event) {

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

//! New "helper" functions based on user input
function getEntireMeal() {
  var randomMain = food.main[(getRandomNumber(food.main))];
  var randomSide = food.side[(getRandomNumber(food.side))];
  var randomDessert = food.dessert[(getRandomNumber(food.dessert))];  
  var entireMeal = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`;

  document.querySelector('h2').innerHTML = entireMeal;  
}

function getSelectedDish(userInput) {
  var randomNum = getRandomNumber(food[userInput]);
  var randomDish = food[userInput][randomNum];
  var dishString = `${randomDish}!`;

  document.querySelector('h2').innerHTML = dishString;
}

// Return radio button input and access the appropriate array 
function getRandomDish() {
  /**
   * Can you move these somewhere else so they're only scoped to where they're used?
   */
  //! Poof!

  /**
   * How else could you get this element without looping through all of the radio inputs?
   */
  //! Loop through radio buttons to return user selected radio ID
  //! Grab an input => with "name" attribute of "dish" => only with psuedo-class "checked"
  //! https://developer.mozilla.org/en-US/docs/Web/CSS/:checked
  var userInput = document.querySelector('input[name="dish"]:checked').id;

  /**
   * Refactor the "if" block to it's own function and the "else" block to it's own function
   */
  // Display dish or entire meal based on user input 
  //! Extra challenge: How could we update this to use a ternary instead of an "if/else"
  //! HINT: Make each "helper" return the "string" value to a variable called "suggestion"
  //! Solution is on branch: hugh-super-refactor
  if (userInput === 'entire-meal') {
    getEntireMeal();
  } else {
    getSelectedDish(userInput);
  }
  
  // Hide cook-pot picture and display suggestion message 
  document.querySelector('.suggestion').style.display = 'block';
  document.querySelector('.img2').style.display = 'none'; 
}


