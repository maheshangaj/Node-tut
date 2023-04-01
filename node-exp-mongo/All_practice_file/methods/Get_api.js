
//all function in one
const express=require('express')
const dbconnect= require('./mongodb')
const app=express()
const mongodb= require('mongodb')

app.use(express.json())
//data get 
app.get('/',async(req,resp)=>{
    let data= await dbconnect()
    shows = await data.find().toArray()
    console.log(shows)
    resp.send(shows)
})
//data put
app.post('/',async(req,resp)=>{
let data=await dbconnect()
let data1=await data.insertOne(req.body)
    resp.send(data1)
})

//data update
app.put('/',async(req,resp)=>{
    //console.log(req.body)
    let data= await dbconnect()
    let result= await data.updateOne(
        {name:"shrinivas"},{$set:{name:"madhav"}})
    resp.send({result:"updated"})
})
//data delet
app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id)
    const data= await dbconnect()
    const result= await data.deleteOne({_id: new mongodb.ObjectId (req.params.id)})
    resp.send("result")
})

app.listen(5100)