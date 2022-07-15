const EventEmitter = require('events');
const express  = require("express");
const event = new EventEmitter();

const app = express();

let count = 0;
event.on('countHit', ()=>{
    count++;
    console.log(`Api Hit count ${count}`);
})

app.get("/", (req,res)=>{
    res.send('Api hit');
    event.emit('countHit');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));


// event.on('showSomething', ()=>{
//     console.log('This is a message 1');
// });

// event.on('showSomething', ()=>{
//     console.log('This is a message 2');
// });

// event.on('showSomething', ()=>{
//     console.log('This is a message 3');
// });

// event.on('showSomething', ()=>{
//     console.log('This is a message 4');
// });

// event.emit('showSomething');

// event.on('showSomething', (sc, msg)=>{
//     console.log(`Status code is ${sc} and message is ${msg}`);
// });

// event.emit('showSomething', 200, "ok");


