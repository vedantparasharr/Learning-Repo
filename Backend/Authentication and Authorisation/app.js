const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 3000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  const token = jwt.sign({ email: "iemvedant@gmail.com" }, "shhhhh");
  res.cookie("token", token);
  res.send("Hello World!");
});

app.get("/dashboard", (req, res) => {
  const data = jwt.verify(req.cookies.token, "shhhhh");
  console.log(data);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
