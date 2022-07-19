var fs = require('fs');

var data = '';

var readStream = fs.createReadStream('demdfsfso.txt');

readStream.on('data', (chunkData)=>{
    data+=chunkData;
});

readStream.on('end', ()=>{
    console.log(data);
    // console.log(__dirname);
});

readStream.on('error', (err)=>{
    console.log(err.stack);
})