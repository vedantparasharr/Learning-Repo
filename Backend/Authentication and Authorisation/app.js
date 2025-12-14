const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash("Vedant@04082005", salt, (err, hash) => {
      console.log(hash);
    });
  });
  bcrypt.compare(
    "Vedant@04082005",
    "$2b$10$A5if8P8mCEdhi.GxIDI0U.mEjXz9fUfdKn189jccWL88KqcxfvbCq",
    function (err, result) {
      console.log(result);
    }
  );  

  res.send("Hello World!");
});

app.get("/read", (req, res) => {
  console.log(req.cookies);
  res.send("Reading");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
