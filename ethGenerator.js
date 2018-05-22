'use strict';
const csv = require('./csvOperator');
const core = require('./core');
const util = require('util');
const moment = require('moment');
const num = 10;//how many to generate

//wallet array
var wallletArray = new Array();
wallletArray.push(new Array("Address","Private Key"))
//email array
var emailArray = new Array();

console.log(moment().format('YYYY_MM_DD_hh_mm_ss') + '  Generator Start..............');

for (var i = 0; i < num; i++) {
  var wallet = core.generator();
  wallletArray.push(wallet);
  //emailArray.push(new Array(wallet[0]));
}

csv.write(getWalletCSVName(),wallletArray);
//csv.write(getEmailCSVName(),emailArray);

function getWalletCSVName(){
  return 'Wallet_' + num + '_' +  moment().format('YYYYMMDDhhmmss') + '.csv';
}

function getEmailCSVName(){
  return 'Email_' + num + '_' +  moment().format('YYYYMMDDhhmmss') + '.csv';
}
