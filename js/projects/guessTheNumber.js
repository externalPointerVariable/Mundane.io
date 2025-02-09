export const guessTheNumber = {
    title: 'Guess the Number 💭',
    code: `
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        const userInput = document.querySelector('#guess');
        const submit = document.querySelector('.guessSubmit');
        const guessSlot = document.querySelector('.prevguess');
        const remaining = document.querySelector('.chances');
        const lowOrHi = document.querySelector('.loworhigh');
        const startOver = document.querySelector('#gamemessage');
        const pguess = document.createElement('p'); // Fixed typo from 'documtent' to 'document'

        let prevGuess = [];
        let numGuess = 1;
        let playGame = true;

        if (playGame) {
            submit.addEventListener('click', function(e) { // Fixed typo from 'addddEventListener' to 'addEventListener'
                e.preventDefault();
                const guess = parseInt(userInput.value);
                validateGuess(guess);
            });
        };

        function validateGuess(guess) {
            if (isNaN(guess)) {
                alert('Please enter a valid number');
            } else if (guess < 1 || guess > 100) {
                alert('Please enter a number between 1 and 100');
            } else {
                prevGuess.push(guess);
                guessSlot.textContent = prevGuess.join(', '); // Added join method to format the guess list
                if (numGuess === 11) {
                    displayMessage('Game Over! The number was ' + randomNumber); // Used regular concatenation
                    endGame();
                } else {
                    displayGuess(guess);
                    checkGuess(guess);
                }
            }
        }

        function checkGuess(guess) {
            if (guess === randomNumber) {
                displayMessage('Congratulations! You got it right');
                endGame();
            } else if (guess < randomNumber) {
                displayMessage('Too low! Try again');
            } else {
                displayMessage('Too high! Try again');
            }
        }

        function displayMessage(message) {
            lowOrHi.textContent = message;
        }

        function displayGuess(guess) {
            userInput.value = '';
            guessSlot.textContent = prevGuess[numGuess - 1];
            numGuess++;
            remaining.textContent = 11 - numGuess;
        }

        function endGame() {
            userInput.value = '';
            userInput.setAttribute('disabled', ''); // Fixed syntax
            pguess.classList.add('button');
            pguess.innerHTML = '<p class="lead" id="newGame">Start new game</p>'; // Changed 'p' to 'pguess' to match the variable
            startOver.appendChild(pguess);
            playGame = false;
            newGame();
        }

        function newGame() {
            const newGameButton = document.querySelector('#newGame');
            newGameButton.addEventListener('click', function(e) {
                randomNumber = Math.floor(Math.random() * 100) + 1;
                prevGuess = [];
                numGuess = 1;
                guessSlot.textContent = '';
                lowOrHi.textContent = '';
                remaining.textContent = 10;
                userInput.removeAttribute('disabled');
                startOver.removeChild(pguess);
                playGame = true;
            });
        }
    `,
    html: `
    <div class="number-game alert alert-secondary p-3">
        <p class="lead text-dark">Guess the number between 1 and 100. You only get 10 chances</p>
        <form id="number-form" class="form-group d-sm-flex flex-column justify-content-center">
            <input type="number" class="form-control" id="guess" placeholder="Enter your guess">
            <button type="submit" class="btn btn-warning btn-lg btn-block mt-2 guessSubmit">Submit</button>
        </form>
    </div>
    <div class="alert alert-info mt-3 d-sm-flex flex-column justify-content-center" id="gamemessage">
        <p class="lead">Previous Guess: <span class="prevguess">NA</span></p>
        <p class="lead">Chances Left: <span class="chances">10</span></p>
        <p class="lead">Hint: <span class="hint loworhigh"></span></p>
    </div>
    `,
};
