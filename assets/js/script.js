/* 'DOMContentLoaded' always wait for DOM to finish loading before executing any code to ensure any elements you are targeting have finished loading */

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
      button.addEventListener('click', function() {
        if (this.getAttribute('data-type') === 'submit') {
          checkAnswer();
        } else {
          let gameType = this.getAttribute('data-type');
          runGame(gameType);
        }
      })
    }
    
    // allows the user to submit their answer using the enter key.
    document.getElementById('answer-box').addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        checkAnswer();
      }
    })

    runGame('addition')
})

/**
 * The main game 'loop' called when the script is first loaded
 * and after the users answer has been processed.
 */
function runGame(gameType) {
  
  // clears the value n the answer box at the start of each game
  document.getElementById('answer-box').value = '';
  // puts the cursor in the answer box at the start of each game
  document.getElementById('answer-box').focus();

  /* Creates random numbers between 1-25. The '+1' at the end is because Math.floor rounds down so would put out 0-24 not 1-25 */
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === 'addition') {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === 'multiply') {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === 'subtract') {
    displaySubtractQuestion(num1, num2);
  } else if (gameType === 'division') {
    displayDivisionQuestion(num1, num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`
  }

}

/**
 * Checks the answer against the first element in the array
 * returned by the calculateCorrectAnswer() function.
 */
function checkAnswer() {

  let userAnswer = parseInt(document.getElementById('answer-box').value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert('Hey you got it right! :D');
    incrementScore();
  } else {
    alert(`You put ${userAnswer}, Correct answer: ${calculatedAnswer[0]}`);
    incrementWrongAnswer();
  }

  runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands and the operator directly from the dom, 
 * calculates and then returns the correct answer.
 */
function calculateCorrectAnswer() {
  
  let operand1 = parseInt(document.getElementById('operand1').innerText);
  let operand2 = parseInt(document.getElementById('operand2').innerText);
  let operator = document.getElementById('operator').innerText;

  if (operator === '+') {
    return [operand1 + operand2, 'addition'];
  } else if (operator === 'x') {
    return [operand1 * operand2, 'multiply'];
  } else if (operator === '-') {
    return [operand1 - operand2, 'subtract'];
  } else {
    alert(`Unimplimented Operator ${operator}`);
    throw `Unimplimented Operator ${operator}. Aborting!`;
  }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
  
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;

}

/**
 * Gets the current number of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {

  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
  
  document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
  document.getElementById('operator').textContent = '-';  
}

function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
  
  document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
  document.getElementById('operator').textContent = '/';  
}