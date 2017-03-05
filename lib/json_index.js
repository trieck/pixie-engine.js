'use strict';

const Repository = require('./repository'),
	Index = require('./index');

class JSONIndexer {
	constructor() {
		this.repos = new Repository();
		this.index = new Index();
		this.filenum = this.offset = 0;
	}

	load(file) {

	}
}

module.exports = JSONIndexer;
