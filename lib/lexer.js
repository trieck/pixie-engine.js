'use strict';

const Tokenizer = require('./tokenizer');

// Test for letters and digits
function isAlnum(aChar) {
	return (isDigit(aChar) || isAlpha(aChar));
}

// Test for digits
function isDigit(aChar) {
	let myCharCode = aChar.charCodeAt(0);

	if ((myCharCode > 47) && (myCharCode < 58)) {
		return true;
	}

	return false;
}
// Test for letters (only good up to char 127)
function isAlpha(aChar) {
	let myCharCode = aChar.charCodeAt(0);

	if (((myCharCode > 64) && (myCharCode < 91)) ||
		((myCharCode > 96) && (myCharCode < 123))) {
		return true;
	}

	return false;
}

class Lexer extends Tokenizer {
	constructor(str) {
		super(str);
	}

	getToken() {
		this.clear();
		let token = '';

		let c;
		while ((c = this.read())) {
			if ((c == '_' || c == '\'') && token.length > 0) {
				token += String.fromCharCode(c);
			} else if (isAlnum(c)) {
				token += String.fromCharCode(c).toLowerCase();
			} else if (token.length > 0) {
				this.unread(1);
				break;
			}
		}

		return token;
	}
}

module.exports = Lexer;

