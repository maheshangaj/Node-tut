const express=require('express')
const reqfilter=require("./middelware")
const route=express.Router()
const app= express()

route.use(reqfilter)
route.get('/',(req,resp)=>{
resp.send("hello home page")
})

app.get('/about',(req,resp)=>{
    resp.send("hello about page")
})

route.get('/user',(req,resp)=>{
    resp.send("hello user page")
})
app.get('/context',(req,resp)=>{
    resp.send("hello context page")
})

app.use('/',route)
app.listen(5100)