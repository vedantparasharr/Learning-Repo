const fs = require("fs");
const http = require("http");
const path = require("path");
const { send } = require("process");

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


// fs.writeFile("message.txt", "I am Vedant", (error) => {
//   if (error) {
//     console.log(error);
//   }
// });

// fs.appendFile("message.txt", "\nI am pursuing computer science.", (error) => {
//   if (error) {
//     console.log(error);
//   }
// });

// fs.copyFile("message.txt", "destination.txt", (error) => {
//   if (error) {
//     console.log(error);
//   }
// });

// fs.rename("message.txt", "newMessage.txt", (error) => {
//   if (error) {
//     console.log(error);
//   }
// });

// fs.unlink("destination.txt", (error) => {
//   console.log(error);
// });

// fs.rm("./test", { recursive: true }, (error) => {
//   if (error) {
//     console.log(err);
//   }
// });

// fs.readFile("newMessage.txt", { encoding: "utf-8" }, (error, data) => {
//   if (error) console.log(error);
//   else console.log(data);
// });

// const server = http.createServer((req, res) => {
//   if (req.url === "/about") {
//     res.end("Hello");
//   }
// });

// server.listen(3000);