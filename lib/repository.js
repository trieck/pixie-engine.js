'use strict';

const config = require('../config'),
	path = require('path');

let instance = null;	// singleton

class Repository {
	constructor() {
		if (!instance) {
			instance = this;
		}

		return instance;
	}

	getPath() {
		return config.content.repository;
	}

	mapPath(db) {
		return path.join(this.getPath(), db);
	}

	getIndexPath(db) {
		let outPath = this.mapPath(db);
		return path.join(outPath, `${db}.idx`);
	}
}

module.exports = Repository;
