const express = require('express')
const path = require('path')
const app = express();

//localfile
const indexpage = path.join(__dirname,"templates/index.html")

app.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(indexpage)
})

app.get("/d",(req,res)=>{
    res.send("hello")
})

app.listen(3010,()=>{
    console.log("Run server at port 3010")
})