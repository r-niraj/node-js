const express = require('express');
const app = express();
const port = 5000

app.get('/', (req,res)=>{
    res.send("Hello There");
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})