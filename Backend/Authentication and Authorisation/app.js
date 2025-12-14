const express = require("express");
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("user", "Vedant");
  res.send("Cookie has been set");
});

app.get("/read", (req, res) => {
  console.log(req.cookies);
  res.send('Reading')
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
