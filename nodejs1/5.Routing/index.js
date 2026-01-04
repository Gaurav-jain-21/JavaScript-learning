import http from 'http';
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url==="/"){
        // res.end("<h1>Home </h1>");
        res.writeHead(200, "ok",{"Content-Type": "text/html"});
        res.end("<a href='/contact'>Contact page</a>");
    }else if(req.url==="/about"){
        res.writeHead(200, "ok",{"Content-Type":"text/html"});
        res.end("<h2>About section</h2>");
    }
    else if(req.url==="/contact"){
        res.writeHead(200,"ok",{"Content-Type":"text/html"});
        res.end("<h3> 9122435955</h3>");
    }
});
server.listen(8000,()=> console.log("server up!"));