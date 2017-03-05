'use strict';

const ReadStringStream = require('string-io').Read,
	PushbackReader = require('./pushback_reader');

const BUFFER_SIZE = 8192;

class Tokenizer {
	constructor(str) {
		let stream = new ReadStringStream(str);
		this.reader = new PushbackReader(stream);
	}
}

module.exports = Tokenizer;
