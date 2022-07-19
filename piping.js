var fs = require('fs');
// var readStream = fs.createReadStream ('Intro to Node JS & Event Loop.pdf');
// var WriteStream = fs.createWriteStream ('NewFile.pdf');

// readStream.pipe(WriteStream);
// console.log("Data tranfer complete");

var WriteStream = fs.createWriteStream('myfile.txt');
process.stdin.pipe(WriteStream);