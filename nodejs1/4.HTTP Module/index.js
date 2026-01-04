import http from 'http'
// Create our server
const server=http.createServer((req, res)=>{
    // console.log(req);
    res.writeHead(202,"Good", {"Content-Type":"text/html"});
    res.write("<h1> hello from node.js server</h1>");
});
server.listen(8000, ()=> console.log("server up!"));