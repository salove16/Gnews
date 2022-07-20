const express = require('express')
const cors = require('cors')
const app=express()

app.use(cors())
app.use(express.json())
const news=require("./Routes/news")

app.use("/api",news)

app.listen(5000,()=> 
console.log("started")
)