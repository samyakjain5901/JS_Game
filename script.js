'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;

function displayContent(message, selector) {
	document.querySelector(selector).textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value); //Any content we receive from DOM is mostly of type string
	if (!guess) {
		displayContent('⛔ Invalid Input!', '.message');
	} else if (guess === secretNumber) {
		displayContent('🎉 Correct Number!', '.message');
		document.querySelector('body').style.backgroundColor = '#60B347';
		document.querySelector('.number').style.width = '30rem';
		displayContent(secretNumber, '.number');
		if (highscore < score) {
			highscore = score;
			displayContent(highscore, '.highscore');
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayContent(
				guess > secretNumber ? '📈 Too High!' : '📉 Too Low!',
				'.message'
			);
			score--;
			displayContent(score, '.score');
		} else {
			displayContent('😪 You Lost the Game!!', '.message');
			displayContent(0, '.score');
			document.querySelector('body').style.backgroundColor = '#FF0000';
			displayContent(secretNumber, '.number');
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 10;
	secretNumber = Math.trunc(Math.random() * 100) + 1;
	displayContent('Start guessing...', '.message');
	displayContent('?', '.number');
	displayContent(score, '.score');
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
