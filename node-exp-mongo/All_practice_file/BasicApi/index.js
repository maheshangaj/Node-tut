const http= require("http")
const data= require("./App")
http.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-type":"application\json"});
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(3200)