const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"/templates/index.html"))
})

module.exports = router