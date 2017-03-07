'use strict';

const StringStream = require('./string_stream'),
	PushbackReader = require('./pushback_reader');

const BUFFER_SIZE = 8192;

class Tokenizer {
	constructor(str) {
		let stream = new StringStream(str);
		this.reader = new PushbackReader(stream, BUFFER_SIZE);
		this.buffer = '';
	}

	getToken() {
	}

	lookahead() {
		let tok = this.getToken();
		this.unread();	// unread the token buffer
	}

	// unread the entire token buffer
	unread() {
		this.unreadn(this.buffer.length);
	}

	unreadn(n) {
		let m = Math.min(this.buffer.length, n);

		for (i = m; i >= 0; i--) {
			this.unread(this.buffer[i]);
		}
	}

	clear() {
		this.buffer = '';
	}

	read() {
		let c = null;
		if ((c = this.reader.read())) {
			this.buffer += String.fromCharCode(c);
		}

		return c;
	}
}

module.exports = Tokenizer;
