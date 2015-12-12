#!/usr/bin/env node
'use strict';
var meow = require('meow');
var isChristmas = require('./');

var cli = meow([
	'Usage',
	'  $ is-christmas',
	'',
	'Examples',
	'  $ is-christmas',
	'  true'
]);

console.log(isChristmas());
