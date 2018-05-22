'use strict';
console.log('Generator Start..............');
var writeToCSV = require('./csvOperator');


var csvData = new Array();
csvData[0] = new Array("Name","Age");
csvData[1] = new Array("ted","30");
csvData[2] = new Array("danna","28");

writeToCSV("ted.csv",csvData);
