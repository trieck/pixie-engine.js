#!/usr/bin/env node

'use strict';

let pkg = require('./package.json'),
	program = require('commander'),
	path = require('path'),
	sleep = require('sleep').msleep,
	Timer = require('./lib/timer');

let scriptName = path.basename(__filename);

program.version(`Pixie Index ${pkg.version}`)
	.parse(process.argv);

if (process.argv.length < 3) {
	process.stderr.write(`usage: ${scriptName} database fields\n`);
	process.exit(1);
}

let timer = new Timer();

try {

} catch (e) {
	process.stderr.write(e);
	process.exit(1);
}

sleep(5000);

console.log(`   ${timer}`);
