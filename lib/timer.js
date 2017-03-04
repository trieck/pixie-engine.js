'use strict';

let sprintf = require('sprintf-js').sprintf;

class Timer {
	constructor() {
		this.start = Date.now();
	}

	millis() {
		return Date.now() - this.start;
	}

	toString() {
		let diff = this.millis();

		let hours = Math.floor((diff / 1000) / 3600);
		let minutes = Math.floor((diff / 1000 % 3600) / 60);
		let seconds = Math.floor((diff / 1000) % 60);
		let hundredths = Math.floor((diff % 1000) / 10);

		let output;
		if (hours > 0) {
			output = sprintf('%2d:%02d:%02d hours', hours, minutes, seconds);
		} else if (minutes > 0) {
			output = sprintf('%2d:%02d minutes', minutes, seconds);
		} else {
			output = sprintf('%2d.%02d seconds', seconds, hundredths);
		}

		return output;
	}
}

module.exports = Timer;
