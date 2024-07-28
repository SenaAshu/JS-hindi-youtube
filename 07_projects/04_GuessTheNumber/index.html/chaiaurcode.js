let random=parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const previousGuesses = document.querySelector('.guesses')
const guessesRemaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess  = []
let numGuess = 0

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const num = parseInt(userInput.value)
        validateNumber(num)

    });
}

function validateNumber(num){
    if(isNaN(num)){
        alert('Please enter a valid number')
    }else if(num > 100){
        alert('Please enter a number below 100')
    }else if(num < 1){
        alert('Please enter a number above 1')
    }else{
        if(numGuess===11){
            remainingGuesses(num)
            displayMessage(`Game Over. Random number was ${random}`)
            endGame()
        }else{
            checkNumber(num);
            remainingGuesses(num);
        }
    }
}

function checkNumber(num){
    if(num===random){
        displayMessage('You Guessed it right!')
    }else if(num>random){
        displayMessage('Number is too high')
    }else if(num<random){
        displayMessage('Number is too low')
    }
}

function remainingGuesses(num){
    userInput.value = ''
    previousGuesses.innerHTML += `${num} `
    numGuess++
    guessesRemaining.innerHTML = `${10-numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    e.preventDefault()
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    previousGuesses.innerHTML = '';
    guessesRemaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}