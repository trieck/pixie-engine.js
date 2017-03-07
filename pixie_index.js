#!/usr/bin/env node

'use strict';

const pkg = require('./package.json'),
	program = require('commander'),
	path = require('path'),
	Timer = require('./lib/timer'),
	JSONIndexer = require('./lib/json_index');

const scriptName = path.basename(__filename);

program.version(`Pixie Index ${pkg.version}`)
	.parse(process.argv);

if (process.argv.length < 3) {
	process.stderr.write(`usage: ${scriptName} database\n`);
	process.exit(1);
}

let timer = new Timer();

try {
	let index = new JSONIndexer();
	index.load(process.argv[2]);
} catch (e) {
	process.stderr.write(e.toString());
	process.exit(1);
}

console.log(`   elapsed time: ${timer}`);
