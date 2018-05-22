'use strict';
const csv = require("fast-csv"),
    fs = require("fs"),
    util = require('util'),
    path = require("path");

function merge(address,email){
  if(!util.isArray(address) || !util.isArray(email)){
    throw new Error("地址列表和邮件列表不匹配");
  }



}
