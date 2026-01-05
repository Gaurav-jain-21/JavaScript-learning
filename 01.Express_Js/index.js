import http from 'http';
const server= http.createServer((req, res)=>{
    if(req.url==="/"){
        res.writeHead(201,"ok",{"Content-Type":"text/html"});
        res.write("<h1>Home</h1>");
    }
    else if(req.url==="/about"){
        res.writeHead(201,"ok",{"Content-Type":"text/html"});
        res.write("<h2>About</h2>");
    }
    else if(req.url==="/contact"){
        res.writeHead(201,"ok",{"Content-Type":"text/html"});
        res.write("<h1>Contact</h1>");
    }
    else{
        res.writeHead(404,"Bad",{"Content-Type":"text/html"});
        res.write("<h1> 404 page not found</h1>");
    }
});
// server.listin(8000,()=>console.log("server listening on port 8000"));
server.listen(8000);