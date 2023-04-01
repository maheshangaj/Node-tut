const express=require('express')
//const mongoose  = require('mongoose')
require('./configer')
const product=require('./product')

const app= express()
app.use(express.json())
app.post('/create',async (req,resp)=>{
    console.log(req.body)
    let data=new product(req.body)
    let result= await data.save()
    resp.send(result)
    console.log(result)
    
})
app.get('/list',async (req,resp)=>{
    let data= await product.find()
    resp.send(data)
})
app.delete('/delete/:_id',async (req,resp)=>{
    console.log(req.params)
    data= await product.deleteOne(req.params)
    resp.send(data)
})
app.put('/update/:_id',async (req,resp)=>{
    console.log(req.params)
    data= await product.updateOne(
 req.params,{$set:req.body})
    resp.send(data)
})
app.get('/search/:key',async(req,resp)=>{
    console.log(req.params.key)
    let data= await product.find(
        {"$or":[
            {'name':{$regex:req.params.key}},
            {'gender':{$regex:req.params.key}},
           
        ]}
    )
    resp.send(data)
})

app.listen(5100)