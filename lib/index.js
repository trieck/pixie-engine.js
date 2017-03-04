'use strict';

const Concordance = require('./concord');

class Index {
	constructor() {
		this.concord = new Concordance();
	}

	insert(term, anchor) {
		this.concord.insert(term, anchor);
	}

	write(db, fields) {

	}
}

module.exports = Index;
