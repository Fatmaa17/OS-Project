'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    //No input!
    //0 is a falsy value, when entering nothing => 0 => falsy
    //document.querySelector('.message').textContent = '😞 No number entered!';
    displayMessage('⛔️ Please enter your guess!');
  } else if (guess < 0 || guess > 20) {
    displayMessage('Not valid number!🤨 (0 -20)');
  } else if (guess === secretNumber) {
    //Got the correct number!
    //document.querySelector('.message').textContent = 'Correct Number, Bravo!🥰';
    displayMessage(`✅ Correct Number ${secretNumber}! 🏆`);
    //Show the secret number when user guesses it right
    document.querySelector('.number').textContent = secretNumber;

    //Changing the bg color :
    //Way 1: document.body.style.backgroundColor = '#60b347';
    document.querySelector('body').style.backgroundColor = '#60b347';
    
    document.querySelector('.number').style.width = '30rem';

    //Implementing the high score value
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess >secretNumber ? '📈Mmm..Too high, Try again!' : '📉Mmm..Too low, Try again!';
      displayMessage(
        guess > secretNumber
          ? '📈Mmm..Too high, Try again!'
          : '📉Mmm..Too low, Try again!'
      );
      //Decrease the score by one :
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'Oh Sorry! But Another Chance to WIN😉!';
      displayMessage('Oh Sorry! But Another Chance to WIN😉!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Guess!🙄';
  displayMessage('Guess!🙄');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
