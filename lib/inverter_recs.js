'use strict';

function checkIndex(records, index) {
	if (index < 0 || index >= records.size) {
		throw `Index ${index} out of bounds.`;
	}
}

function checkEmpty(records, index) {
	if (records[index]) {
		throw `Index ${index} not empty.`;
	}
}

function checkNotEmpty(records, index) {
	if (!records[index]) {
		throw `Index ${index} empty.`;
	}
}

class InverterRecs {

	constructor(size) {
		this.records = [];
		this.records.length = size;
	}

	static alloc(size) {
		return new InverterRecs(size);
	}

	isEmpty(index) {
		checkIndex(this.records, index);
		return this.records[index] == null;
	}

	term(index) {
		checkIndex(this.records, index);
		return this.records[index].term;
	}

	anchors(index) {
		checkIndex(this.records, index);
		return this.records[index].buffer;
	}

	put(index, term) {
		checkIndex(this.records, index);
		checkEmpty(this.records, index);

		this.records[index] = {};
		this.records[index].buffer = [];
		this.records[index].term = term;
	}

	insert(index, anchor) {
		checkIndex(this.records, index);
		checkNotEmpty(this.records, index);

		let buffer = this.records[index].buffer;
		if (buffer.length > 0) {
			if (buffer[buffer.length - 1] === anchor) {
				return;	// exists
			}
			assert(buffer[buffer.length - 1] < anchor);
		}
		buffer.push(anchor);
	}

	compact() {
		let j = 0;
		for (let i of this.records.keys()) {
			if (this.records[i]) continue;

			while (j < this.records.length) {
				if (j > i && this.records[j]) {
					break;
				}
				j += 1;
			}

			if (j >= this.records.length) {
				break;
			}

			this.records[i] = this.records[j];
			this.records[j] = null;
		}
	}

	sort() {
		this.records.sort(function (a, b) {
			if (a.term < b.term) {
				return -1;
			} else if (a.term > b.term) {
				return 1;
			}
			return 0;
		});
	}

	clear() {
		this.records.map(function () {
			return null;
		});
	}
}

module.exports = InverterRecs;