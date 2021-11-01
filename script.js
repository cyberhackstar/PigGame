'use strict';

//To Select Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

//Set Score Initial Value
let score = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let gameMode = true;

//Starting Values
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Function to Switch Player
const switchPlayer = function () {
  //Switch To Next Player
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;

  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//To add ROLL DICE Button Event
btnRoll.addEventListener('click', function () {
  //To Generate Random no.
  if (gameMode) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //To Display Dice no.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //To Display Current Score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      //Switch To Next Player
      switchPlayer();
    }
  }
});

//To Add HOLD Button Event
btnHold.addEventListener('click', function () {
  if (gameMode) {
    score[currentPlayer] += currentScore;
    // console.log(score[currentPlayer]);
    document.querySelector(`#score--${currentPlayer}`).textContent =
      score[currentPlayer];

    if (score[currentPlayer] >= 20) {
      gameMode = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else {
      //Switch To Next Player
      switchPlayer();
    }
  }
});

//Click Event For New Game Button
btnNew.addEventListener('click', function () {
  console.log('hello');
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
  currentPlayer = 0;
});
