const express = require('express')
const router = require("./router")
const app = express();

app.use(router)

app.listen(3010,()=>{
    console.log("Run server at port 3010")
})