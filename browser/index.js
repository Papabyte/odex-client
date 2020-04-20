/*jslint node: true */
'use strict';
const ws_api = require('../ws_api.js');
const rest_api = require('../rest_api.js');
const orders = require('../orders.js');
const balances = require('../balances.js');
const exchange = require('../exchange.js');

if (typeof window !== 'undefined')
	console.log('run in browser');
else
	console.log('not run in browser');


start();

async function start() {
	await exchange.start();
	await ws_api.connect();
}

function setConfiguration(conf){

	rest_api.setConfiguration(conf);
	orders.setConfiguration(conf);
	ws_api.setConfiguration(conf);

}

exports.start = start;

exports.setConfiguration = setConfiguration;
exports.ws_api = ws_api;
exports.rest_api = rest_api;
exports.exchange = exchange;
exports.orders = orders;
exports.balances = balances;
