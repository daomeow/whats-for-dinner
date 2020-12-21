//Radio Button HTML Elements 
var side = document.querySelector('#side');
var main = document.querySelector('#main-dish');
var dessert = document.querySelector('#dessert');
var meal = document.querySelector('#entire-meal');
var cookButton = document.querySelector('.button2');
var radios = document.getElementsByName('dish');

//Event Listeners
cookButton.addEventListener('click', function(event) {
  event.preventDefault();
  getRandomDish();
});
         
//Retrieves random arry from index
function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
};

//Return radio button input will access the array 
function getRandomDish() {
  var randomDish;
  var randomNum;
  var entireMeal;
  var userInput;
  var dishString = '';
  for (var i = 0; i < radios.length; i++) {  
    if (radios[i].checked) {
      userInput = radios[i].id;
    }  
  };

  if (userInput === 'entire-meal') {
    entireMeal = food['main'][(getRandomNumber(food['main']))] + 
      " with a side of " +
      food['side'][(getRandomNumber(food['side']))] + 
      " and " +  
      food['dessert'][(getRandomNumber(food['dessert']))] + " for dessert!"

    document.querySelector('h2').innerHTML = entireMeal;  

  } else {
    randomNum = getRandomNumber(food[userInput]);
    randomDish = food[userInput][randomNum];
    dishString = `${randomDish}!`;
    document.querySelector('h2').innerHTML = dishString;
  }
  document.querySelector('.suggestion').style.display = 'block';
  document.querySelector('.img2').style.display = 'none'; 
};


