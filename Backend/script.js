const arr = [1, 2, 3, 4, 5];
console.log("Raw: " + arr);

const forEachArr = arr.forEach((val) => {
  return val + 1;
});
console.log("For each: " + forEachArr);

const mapArr = arr.map((val) => val * 3);
console.log("Mapped Array: " + mapArr);

const filteredArr = arr.filter((val) => val <= 2);
console.log("Filtered Arr: " + filteredArr);

const found = arr.find((val) => val === 4);
console.log("Found " + found);

const index = arr.indexOf(2);
console.log("Index: " + index);

const obj = {
  name: "Vedant",
  age: 21,
};

console.log(obj.age);

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
