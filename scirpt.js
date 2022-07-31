const score = document.getElementById('score');
const roll = document.getElementById('roll');
const restart = document.getElementById('restart');
const winLose = document.getElementById('winLose');
const diceFace = document.getElementById('diceFace');

let rolled = 0;


roll.addEventListener('click', () => {
    let number = Math.ceil(Math.random() * 6);

    if (number === 1 || score <= 20) {
        diceFace.src = "diceGame/Dice/dice-1.png";
        score.textContent = `Loser, you rolled a '1', click restart to play again`;
        document.getElementById('roll').style.visibility='hidden';
    } else if (number == 2) {
        diceFace.src = "diceGame/Dice/dice-2.png";
        rolled += 2;
        score.textContent = `${rolled}`;
    } else if (number == 3) {
        diceFace.src = "diceGame/Dice/dice-3.png";
        rolled += 3;
        score.textContent = `${rolled}`;
    } else if (number == 4) {
        diceFace.src = "diceGame/Dice/dice-4.png";
        rolled += 4;
        score.textContent = `${rolled}`;
    } else if (number == 5) {
        diceFace.src = "diceGame/Dice/dice-5.png";
        rolled += 5;
        score.textContent = `${rolled}`;
    } else if (number == 6) {
        diceFace.src = "diceGame/Dice/dice-6.png";
        rolled += 6;
        score.textContent = `${rolled}`;
    }
      if (rolled >= 20) {
        score.textContent = `Winner, you scored ${rolled}, click restart to play again`;
        document.getElementById('roll').style.visibility='hidden';
      }  
});

restart.addEventListener('click', () => {
    rolled = 0;
    diceFace.src = "diceGame/Dice/dice-1.png";
    score.textContent = `0`;
    document.getElementById('roll').style.visibility='visible';

});

