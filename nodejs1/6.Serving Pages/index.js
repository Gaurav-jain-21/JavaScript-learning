import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./public/home.html", (error, data) => {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading page");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(8000, () => console.log("Server up!"));
