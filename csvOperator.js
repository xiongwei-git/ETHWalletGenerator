const csv = require("fast-csv"),
    fs = require("fs"),
    path = require("path");

function writeToCSV(fileName, data) {
    var ws = fs.createWriteStream(path.resolve("./assets", fileName));
    csv.write(data, {
            headers: true
        })
        .pipe(ws)
        .on("finish", function () {});
}

function readFromCSV(fileName) {
    var stream = fs.createReadStream(fileName);
    var csvStream = csv()
        .on("data", function (data) {
            console.log(data);
        })
        .on("end", function () {});
    stream.pipe(csvStream);
}

module.exports = {
    write: writeToCSV,
    read: readFromCSV
};
