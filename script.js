'use strict';
// console.log(document.querySelector)
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore = 0;
};

let playing = true;
let scores = [0, 0];
let score = 0;
let currentScore = 0;
let activePlayer = 0;
// roll dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1 random son
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    // 2 chiqarish rasmni
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRandom}.png`;
    // 3 tekshirish
    if (diceRandom !== 1) {
      //1 o'yinchiga ballni qo'shib qo'yish
      currentScore += diceRandom;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent=currentScore
    } else {
      //1 keyingi o'yinchiga o'tish
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1 balni qo'shish
    activePlayer === 0
      ? (scores[0] += currentScore)
      : (scores[1] += currentScore);
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];

    //2 if player's score is >=100
    if (scores[activePlayer] >= 10) {
      playing = false;
      dice.classList.add('hidden');
      if (activePlayer === 1) {
        player1El.classList.add('player--winner');
        player1El.classList.remove('player--active');
      } else if (activePlayer === 0) {
        player0El.classList.add('player--winner');
        player0El.classList.remove('player--active');
      }
    }
    //3 keyingi o'yinchiga o'tish
    switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  if (playing === false) {
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
  }
  playing = true;
});
