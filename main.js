//////////////////////////////////////
// Event Listener
//////////////////////////////////////
document.querySelector('.button2').addEventListener('click', function (event) {
  event.preventDefault();
  getRandomDish();
});

//////////////////////////////////////
// Functions
//////////////////////////////////////
// Retrieve random number from array
function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function getEntireMeal() {
  var randomMain = food.main[getRandomNumber(food.main)];
  var randomSide = food.side[getRandomNumber(food.side)];
  var randomDessert = food.dessert[getRandomNumber(food.dessert)];
  var entireMeal = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`;

  return entireMeal;
}

function getSelectedDish(userInput) {
  var randomNum = getRandomNumber(food[userInput]);
  var randomDish = food[userInput][randomNum];
  var dishString = `${randomDish}!`;

  return dishString;
}

function getRandomDish() {
  var userInput = document.querySelector('input[name="dish"]:checked').id;
  var suggestion =
    userInput === 'entire-meal' ? getEntireMeal() : getSelectedDish(userInput);

  // Set value of suggestion
  document.querySelector('h2').innerHTML = suggestion;

  // Hide cook-pot picture and display suggestion message
  document.querySelector('.suggestion').style.display = 'block';
  document.querySelector('.img2').style.display = 'none';
}
