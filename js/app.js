'use strict';

alert('Welcome to the greatest page you will ever see!!!');
var userName = prompt('Choose your name');
// console.log(userName);
alert('Hiya ' + userName + ' I hope you studied.');

var game = prompt('Do you want to play a game? yes or no').toLowerCase();
// console.log(game);
if (game === 'yes' || game === 'y') {
  // console.log('Very well, ' + userName + ' answered ' + game + ' to playing a game');
  alert('Let\'s have some fun!');
} else {
  alert('Too bad, Haha!');
}

var quest1 = prompt('Do I live in Washington? yes or no').toLowerCase();
// console.log(quest1);
if (quest1 === 'yes' || quest1 === 'y') {
  // console.log(userName + ' answered ' + quest1 + ' to question 1');
  alert('That was an easy one.');
} else {
  alert('Wrong! Haha');
}

var quest2 = prompt('Did I go to Western Washington University? yes or no').toLowerCase();
// console.log(quest2);
if (quest2 === 'no' || quest2 === 'n') {
  // console.log(userName + ' answered ' + quest2 + ' question 2');
  alert('Good Job.');
} else {
  alert('Better luck next time');
}

// Question Four y/n
var quest3 = prompt('Do I have kitties? yes or no').toLowerCase();
// console.log(quest3);
if (quest3 === 'no' || quest3 === 'n') {
  // console.log(userName + ' answered ' + quest3 + ' to question 3');
  alert('Sadly I dont, but hopefully soon.');
} else {
  alert('Just rub salt in the wound, I will have them soon though!');
}

var quest4 = prompt('Is Lauren the Best? yes or no, but mostly yes');
// console.log(quest4);
if (quest4 === 'yes' || quest4 === 'y') {
  // console.log(userName + ' answered ' + quest4 + ' to question 4');
  alert('You have good taste!');
} else {
  alert('...');
}

// question 6
var attempts = 4;
var quest6Ans = 8;
for (var i = 0; i < attempts; i++) {
  var quest6 = parseInt(prompt('Guess a number between 1 and 10.'));
  if (quest6 === quest6Ans) {
    alert('Good Job');
    break;
  } else if (quest6 > quest6Ans && i !== 3) {
    alert('Too High');
  } else if (quest6 < quest6Ans && i !== 3) {
    alert('Too Low');
  } else {
    alert('Game Over');
  }
}

// question 7

var food = ['sushi', 'pizza', 'drunken noodle', 'ramen'];
console.log(food);
loop1: for (var i = 0; i < 6; i++) {
  var quest7 = prompt('What are my favorite foods?').toLowerCase();
  // console.log('food[j]', food[j]);
  // console.log('quest7', quest7);
  for (var j = 0; j < food.length; j++) {
    if (quest7 === food[j]) {
      alert('Good Job');
      break loop1;
    }
    else if (quest7 !== food[j]) {
      alert('sorry, try again');
      break;
    }
  }
}
alert(`The correct answers are ${food}`);

alert(`Thank's ${userName}, for taking an interest in my journey and playing my game.`);
