module.exports=reqfilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("plz fill age")
    }else if(req.query.age<18){
        resp.send("your not allow")
    }else{next()}
} 