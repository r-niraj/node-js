var fs = require('fs');

var data = "This is a sample data for writable stream";

var writeData = fs.createWriteStream('test.txt');
writeData.write(data, 'utf-8');

writeData.end();


writeData.on('finish', ()=>{
    console.log("Writing Finished");
    // console.log(__dirname);
});

writeData.on('error', (err)=>{
    console.log(err.stack);
})
