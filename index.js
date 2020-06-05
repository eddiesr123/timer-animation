import Timer from './timer.js';

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const callbacks = {
	onStart(totalDuration) {
		console.log('Timer Started');
		duration = totalDuration;
	},

	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},

	onComplete() {
		console.log('Timer just completed');
	}
};

new Timer(durationInput, startButton, pauseButton, callbacks);
