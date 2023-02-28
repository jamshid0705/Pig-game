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
const player0El=document.getElementsByClassName('player--0')
const player1El=document.getElementsByClassName('player--1')

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

let scores = [0, 0];
let score = 0;
let currentScore = 0;
let activePlayer = 0;
// roll dice
btnRoll.addEventListener('click', function () {
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

    activePlayer === 0
      ? (scores[0] += currentScore)
      : (scores[1] += currentScore);
    activePlayer===0? player0El.classList.add('player--active'):player1El.classList.a
    activePlayer = activePlayer === 0 ? 1 : 0;
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    current0El.textContent=0
    current1El.textContent=0
    currentScore = 0;
  }
});
