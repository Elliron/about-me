'use strict';

// global variables
var totalAnswer = 0;

alert('Welcome to the greatest page you will ever see!!!');
var userName = prompt('Choose your name');
// console.log(userName);


alert('Hiya ' + userName + ' I hope you studied.');

// question 1
function qOne() {
  var questOne = prompt('Do you want to play a game? yes or no').toLowerCase();
  // console.log(questOne);
  if (questOne === 'yes' || questOne === 'y') {
    // console.log('Very well, ' + userName + ' answered ' + questOne + ' to playing a game');
    totalAnswer++;
    alert('Let\'s have some fun!');
  } else {
    alert('Too bad, Haha!');
  }
}


//question 2
function qTwo() {
  var questTwo = prompt('Do I live in Washington? yes or no').toLowerCase();
  // console.log(questTwo);
  if (questTwo === 'yes' || questTwo === 'y') {
    // console.log(userName + ' answered ' + questTwo + ' to question 1');
    totalAnswer++;
    alert('That was an easy one.');
  } else {
    alert('Wrong! Haha');
  }
}



// //question 3
function qThree() {
  var questThree = prompt('Did I go to Western Washington University? yes or no').toLowerCase();
  // console.log(questThree);
  if (questThree === 'no' || questThree === 'n') {
    // console.log(userName + ' answered ' + questThree + ' question 2');
    totalAnswer++;
    alert('Good Job.');
  } else {
    alert('Better luck next time');
  }
}


// question 4 y/n
function qFour() {
  var questFour = prompt('Do I have kitties? yes or no').toLowerCase();
  // console.log(questFour);
  if (questFour === 'no' || questFour === 'n') {
    // console.log(userName + ' answered ' + quest3 + ' to question 3');
    totalAnswer++;
    alert('Sadly I dont, but hopefully soon.');
  } else {
    alert('Just rub salt in the wound, I will have them soon though!');
  }
}

//question 5
function qFive() {
  var questFive = prompt('Is Lauren the Best? yes or no, but mostly yes').toLowerCase();
  // console.log(questFive);
  if (questFive === 'yes' || questFive === 'y') {
    // console.log(userName + ' answered ' + questFive + ' to question 4');
    totalAnswer++;
    alert('You have good taste!');
  } else {
    alert('...');
  }
}

// question 6
function qSix() {
  var attempts = 4;
  var questSixAns = 8;
  for (var i = 0; i < attempts; i++) {
    var quest6 = parseInt(prompt('Guess a number between 1 and 10.'));
    if (quest6 === questSixAns) {
      totalAnswer++;
      alert('Good Job');
      break;
    } else if (quest6 > questSixAns && i !== 3) {
      alert('Too High');
    } else if (quest6 < questSixAns && i !== 3) {
      alert('Too Low');
    } else {
      alert('Game Over');
    }
  }
}
// question 7
function qSeven() {
  var food = ['sushi', 'pizza', 'drunken noodle', 'ramen'];
  var attempts = 0;
  var guesses = 6;
  var notAnsweredCorrectly = true;
  console.log(food);
  while(notAnsweredCorrectly && attempts <= guesses) {
    attempts++;
    var questSeven = prompt('What are my favorite foods?');
    for (var j = 0; j < food.length; j++) {
      if (questSeven === food[j]) {
        totalAnswer++;
        alert('Good Job');
        notAnsweredCorrectly = false;
        break;
      }
    } if (notAnsweredCorrectly) {
      alert('Sorry try again');
    }
  }
}

function thankTotal() {
  alert(`Thank's ${userName}, for taking an interest in my journey and playing my game. you answered ${totalAnswer} correct.`);
}


//function call

qOne();
qTwo();
qThree();
qFour();
qFive();
qSix();
qSeven();
thankTotal();

