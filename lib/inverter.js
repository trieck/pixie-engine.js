'use strict'

const InverterRecs = require('./inverter_recs');
const MAX_COUNT = 1000;	// maximum number of index records

class Inverter {

	constructor() {
		this.clear();
	}

	isFull() {
		return this.count >= MAX_COUNT;
	}

	compact() {
		this.records.compact();
	}

	clear() {
		this.records = [];
		this.count = 0;
	}

	insert(term, anchor) {

	}

	write(file) {

	}

	alloc() {
		this.records = InverterRecs.alloc(this.size);
	}
}

module.exports = Inverter;
