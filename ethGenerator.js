'use strict';
const csv = require('./csvOperator');
const core = require('./core');
const myUtil = require('./util');
const util = require('util');
const num = 10;//how many to generate

//wallet array
var wallletArray = new Array();
wallletArray.push(new Array("Address","Private Key"))
//email array
// var emailArray = new Array();
// emailArray.push(new Array("Address", "Email"))

console.log(myUtil.nowTime() + '  Generator Start..............');

for (var i = 0; i < num; i++) {
  var wallet = core.generator();
  wallletArray.push(wallet);
  //emailArray.push(new Array(wallet[0],"--"));
}

csv.write(myUtil.fileName('GeneratorWalletInfo_' + num),wallletArray);
// csv.write(myUtil.fileName('AddressInfo_' + num),emailArray);
