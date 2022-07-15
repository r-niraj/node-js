const fs = require('fs');
const http = require('http');
const { Duplex, Transform } = require('stream');

const server = http.createServer();

server.on('request', (req,res)=>{
//     fs.readFile('readme.txt', (err, data)=>{
//         if(err) return console.log(err);
//         res.end(data.toString());
//     });

const rstream = fs.createReadStream('readme.txt');
rstream.on('data', (blockdata)=>{
    res.write(blockdata);
});

rstream.on('end', ()=>{
    res.end();
});

});

server.listen(8000, '127.0.0.1');

// readable streams
// writable
// Duplex
// Transform