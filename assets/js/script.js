/* 'DOMContentLoaded' always wait for DOM to finish loading before executing any code to ensure any elements you are targeting have finished loading */

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
      button.addEventListener('click', function() {
        if (this.getAttribute('data-type') === 'submit') {
          alert('You clicked Submit!');
        } else {
          let gameType = this.getAttribute('data-type');
          alert(`You clicked ${gameType}`);
        }
      })
    }
})

function runGame() {

  /* Creates random numbers between 1-25. The '+1' at the end is because Math.floor rounds down so would put out 0-24 not 1-25 */
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivisionQuestion() {
    
}