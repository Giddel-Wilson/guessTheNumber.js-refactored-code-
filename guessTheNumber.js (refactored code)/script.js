'use strict';

let score = 10;
let secNum = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

// display message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// game logic
const clickFunct = function () {
  const guess = Number(document.querySelector('.guess').value);

  // No number was inputted
  if (!guess) {
    displayMessage('🛑 No number!');

    // If the user win
  } else if (guess === secNum) {
    displayMessage('🎉 You win the game!');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secNum;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if guess is too low or too high
  } else if (guess !== secNum) {
    if (score > 1) {
      displayMessage(guess < secNum ? '📉 Too low!' : '📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You Lost!');
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
};

// restart || again logic
const againFunct = function () {
  score = 10;
  secNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', clickFunct);
document.querySelector('.again').addEventListener('click', againFunct);
