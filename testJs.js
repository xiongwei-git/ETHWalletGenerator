'use strict';
const csv = require("fast-csv");

function Hello() {
  console.log("hello ted~~~~~~");
}

function Greet(name) {
  console.log("Hello,nice to meet you" + name);
}


module.exports = {
  hello: Hello,
    greet: Greet
};
