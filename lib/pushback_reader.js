'use strict';

const BufferedReader = require('./buffered_reader');

class PushbackReader extends BufferedReader {
	constructor(stream, size) {
		super(stream, size);
	}
}

module.exports = PushbackReader;
