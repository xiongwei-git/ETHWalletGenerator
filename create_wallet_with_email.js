'use strict';
const csv = require("fast-csv"),
    path = require("path"),
    fs = require("fs"),
    csvHelper = require('./csvOperator'),
    core = require('./core'),
    myUtil = require('./util');

var emailSrcFile = "EmailInfo.csv";

//wallet array
var wallletArray = new Array();
wallletArray.push(new Array("Address", "Private Key"));

var stream = fs.createReadStream(path.resolve("./assets", emailSrcFile))
    .pipe(csv.parse({
        headers: true
    }))
    .pipe(csv.format({
        headers: true
    }))
    .transform(function (row) {
        var wallet = core.generator();
        wallletArray.push(wallet);
        return {
            Email: row.Email,
            Password: row["Password"],
            Address: wallet[0]
        };
    })
    .pipe(fs.createWriteStream(path.resolve("./assets", myUtil.fileName('Email&Address_'))))
    .on("finish", function () {
        csvHelper.write(myUtil.fileName('WalletInfo_'), wallletArray);
    });
