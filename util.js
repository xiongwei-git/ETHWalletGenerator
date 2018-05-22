'use strict';
const moment = require('moment');

function createCSVFileName(pre){
  return pre + '_' +  moment().format('YYYYMMDDhhmmss') + '.csv';
}

function getTime(){
  return moment().format('YYYY_MM_DD_hh_mm_ss');
}

module.exports = {
    fileName: createCSVFileName,
    nowTime: getTime
};
