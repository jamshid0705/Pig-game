'use strict';
// console.log(document.querySelector)
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

// roll dice 
btnRoll.addEventListener('click',function(){
  // 1 random son 
  const diceRandom=Math.trunc(Math.random()*6)+1
  // 2 chiqarish rasmni
  dice.classList.remove('hidden')
  dice.src = `dice-${diceRandom}.png`;
  // 3 tekshirish
  if(diceRandom!==1){
   //1 o'yinchiga ballni qo'shib qo'yish
  } 
})