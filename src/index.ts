
import './styles.css';

// find the valuable things

const secretNumber = 6;  // add a randomizer

const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

let currentSquare = 1;
squares.forEach(sq => {
    if (currentSquare === secretNumber) {
        sq.dataset.secret = 'true'; // creates attribute data-secret.  has to start with data.
    }
    currentSquare++;
    sq.addEventListener('click', handleClick);
});

function handleClick() {
    // trick - give 'this' a type.  tradition says use 'that'.  gets you intellisense.
    const that = this as HTMLDivElement;
    const isWinner = this.dataset.secret === 'true';
    if (isWinner) {
        that.classList.add('winner');
    } else {
        that.classList.add('loser');
    }
    that.removeEventListener('click', handleClick);  // can't click it again

}

// to-dos ---- optional homework
// mark all other guesses as losers
// make a play-again button that resets everything
// if you win display a message
// if they lose display 'YOU PICKED EVERY ONE BUT THE WINNER' or something
