'use strict';

const Readable = require('stream').Readable;

class StringStream extends Readable {
	constructor(str) {
		super();
		this.push(str);
		this.push(null);
	}

	readString(size) {
		let buffer = super.read(size);
		return buffer ? buffer.toString() : null;
	}
}

module.exports = StringStream;
