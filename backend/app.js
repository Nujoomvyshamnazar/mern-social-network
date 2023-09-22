const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const env = process.env
PORT = env.PORT || 5000




app.listen(PORT,()=>{
    console.log(`server Started:PORT:${PORT}`)
})