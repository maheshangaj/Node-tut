const express = require('express')

const app=express()

app.get("/",(req,resp)=>{
    resp.send("hello project")
})
app.listen(5100)