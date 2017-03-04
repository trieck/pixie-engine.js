'use strict';

const Inverter = require('./inverter');
const ConcordMerge = require('./concord_merge');
const Tmp = require('tmp');

class Concordance {
	constructor() {
		this.block = new Inverter();
		this.tempfiles = [];
	}

	isFull() {
		return this.block.isFull();
	}

	blockSave() {
		if (this.block.count() > 0) {
			var file = Tmp.fileSync({});
			this.tempfiles.push(file);
			this.block.write(file);
		}
	}

	insert(term, anchor) {
		if (this.isFull()) {
			this.blockSave();
		}
		this.block.insert(term, anchor);
	}

	merge() {
		this.blockSave();
		if (this.tempfiles.length == 1) {	// optimization
			return this.tempfiles[0];
		}

		var merger = new ConcordMerge();
		merger.merge(this.tempfiles);
	}
}

module.exports = Concordance;
