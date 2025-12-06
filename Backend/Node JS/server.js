const fs = require("fs");
const http = require("http");

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

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(3000);
