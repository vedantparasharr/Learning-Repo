const express = require("express");
const app = express();

app.use(express.json);
app.use(express.urlencoded({extended:true}));

const m1 = (req, res, next) => {
  console.log("1");
  next();
};
const m2 = (req, res, next) => {
  console.log("1");
  next();
};
const m3 = (req, res, next) => {
  console.log("1");
  next();
};
const m4 = (req, res, next) => {
  console.log("1");
  next();
};

app.use([m1, m2, m3, m4]);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is about");
});

app.get("/error", (req, res, next) => {
  return next(new Error("Not implemented"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
