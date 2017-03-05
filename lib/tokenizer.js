'use strict';

const StringStream = require('./string_stream'),
	PushbackReader = require('./pushback_reader');

const BUFFER_SIZE = 8192;

class Tokenizer {
	constructor(str) {
		let stream = new StringStream(str);
		this.reader = new PushbackReader(stream);
	}

	getToken() {
	}

	lookahead() {
		let tok = this.getToken();
		this.unread();
	}

	// unread the entire token buffer
	unread() {
	}
}

module.exports = Tokenizer;
