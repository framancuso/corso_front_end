const http = require("http");
const fs= require("fs");
const httpdispatcher= require("httpdispatcher");
const dispatcher= new httpdispatcher();
const httpproxy= require('http-proxy');
const proxy= httpproxy.createProxyServer();
const hostname="127.0.0.1";
const port=3000;

dispatcher.onGet("/",function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type',"text/html");
    fs.readFile(("./index.html"),function(err,data){
    res.end(data); 
    })
});
dispatcher.onGet("/lista",function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type',"text/html");
    fs.readFile(("./pages/lista.html"),function(err,data){
    res.end(data); 
    })
});
dispatcher.onGet("/info",function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type',"text/html");
    fs.readFile(("./pages/info.html"),function(err,data){
    res.end(data); 
    })
});
dispatcher.onGet("/donatori",function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type',"text/html");
    fs.readFile(("./pages/donatori.html"),function(err,data){
    res.end(data); 
    })
});
dispatcher.onGet("/api/list",function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type',"text/html");
    res.end(JSON.stringify([
        {
            name: 'wesley',
            color: 'black'
        },
        {
            name: "giorgio",
            color:'orange'
        },
    ])); 
});
const server= http.createServer((req,res)=>{
    dispatcher.dispatch(req,res);
});
const server2= http.createServer((req,res) => {
    proxy.web(req,res,{target:'http://127.0.0.1:3000'});
})
server.listen(port,hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
server2.listen(3001,hostname, () =>{
    console.log(`Server running at http://${hostname}:${3001}/`);
});