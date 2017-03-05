'use strict';

class BufferedReader {
	constructor(stream, size) {
		this.stream = stream;
		this.index = this.size = size;
	}

	read() {
		let c;
		if (this.index == this.size) {
			if (!(this.buffer = this.stream.read(this.size))) {
				return null;
			}
			this.index = 1;
			c = this.buffer[0];
		} else {
			c = this.buffer[this.index++];
		}

		return c;
	}
}

module.exports = BufferedReader;
