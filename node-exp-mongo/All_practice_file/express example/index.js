const express=require('express')
const app=express()
app.get('',(req,resp)=>{
    resp.send(`<h1>hello india</h1> <a href="/about">go to back</a>`)
})
app.get('/about',(req,resp)=>{
resp.send(`
<input type="text" placeholder='username' value="${req.query.name }"/>
<button>clickme</button>
<a href="/">go to back</a>`)
})
app.get('/abc',(req,res)=>{
    res.send('hello this is abc page')
})
app.listen(5000)