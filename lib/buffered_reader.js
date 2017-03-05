'use strict';

class BufferedReader {
	constructor(stream, size) {
		this.stream = stream;
		this.index = this.size = size;
		this.buffer = [];
		this.buffer.length = size;
	}

	read() {
		let c = null;
		if (this.index == this.buffer.length) {
			this.buffer = this.stream.read(this.buffer.length);
		}

		return c;
	}
}

module.exports = BufferedReader;
