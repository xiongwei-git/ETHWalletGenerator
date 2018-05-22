'use strict';
const csv = require("fast-csv");

function writeToCSV(fileName, data) {
  // console.log(data);
    csv.writeToPath(fileName, data, {
            headers: true
        })
        .on("finish", function () {
            console.log("writeToCSV done!");
        });
}

module.exports = {
  write: writeToCSV
};
