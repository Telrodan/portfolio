'use strict';

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    setNumber(secretNumber);
    displayMessage('Correct Number');
    setBackgroundColor('#60b347');
    setNumberWidth('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    console.log(secretNumber);
    if (score > 1) {
      score--;
      setScore(score);
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    } else {
      setScore(0);
      displayMessage('You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setScore(score);
  secretNumber = generateSecretNumber();
  setNumber('?');
  displayMessage('Start guessing...');
  setBackgroundColor('#222');
  document.querySelector('.guess').value = '';
  setNumberWidth('15rem');
});
