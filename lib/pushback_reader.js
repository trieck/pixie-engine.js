'use strict';

const BufferedReader = require('./buffered_reader');

const BUFFER_SIZE = 8192;

class PushbackReader extends BufferedReader {
	constructor(stream, size) {
		super(stream, BUFFER_SIZE);
		this.pos = this.size = size;
		this.buf = [];
		this.buf.length = this.size;
	}

	read() {
		if (this.pos < this.buf.length) {
			return this.buf[this.pos++];
		} else {
			super.read();
		}
	}

	unread(c) {
		if (this.pos == 0) {
			throw new Error("pushback buffer overflow.");
		}
		this.buf[--this.pos] = c;
	}

	unreads(str) {
		if (str.length > this.pos) {
			throw new Error("pushback buffer overflow.");
		}

		this.pos -= str.length;
		for (i = 0; i < str.length; i++) {
			this.buf[this.pos + i] = str[i];
		}
	}
}

module.exports = PushbackReader;
