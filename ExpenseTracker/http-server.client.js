const http= require("http");
const fs=require("fs");
const httpdispatcher=require("httpdispatcher")
const dispatcher= new httpdispatcher();
const hostname="127.0.0.1";
const port="3000";
const server= http.createServer((req,res) => {
    dispatcher.dispatch(req,res);
})
dispatcher.onGet("/",function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type',"text/html");
    fs.readFile(('./'),function(err,data){
        res.end(data);
    })
}); 
server.listen(port,hostname,() =>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
