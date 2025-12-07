const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  let sendData;
  if (req.url === "/about.html") {
    fs.readFile(
      path.join(__dirname, "files", "about.html"),
      "utf-8",
      (error, data) => {
        if (error) {
          console.log("READ ERROR:", error);
          res.writeHead(500);
          return res.end("File error");
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    );
  } else if (req.url === "/projects.html") {
    fs.readFile(
      path.join(__dirname, "files", "projects.html"),
      "utf-8",
      (error, data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    );
  } else if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "files", "index.html"),
      "utf-8",
      (error, data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    );
  }
});

server.listen(3000);

