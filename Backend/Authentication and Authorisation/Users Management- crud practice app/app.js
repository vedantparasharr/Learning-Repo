const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const userModel = require("./models/userModel");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const ejs = require("ejs");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.post("/createUser", (req, res) => {
  const { username, name, email, password, age } = req.body;
  bcrypt.genSalt(10, async (err, salt) => {
    let hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel.create({
      username,
      name,
      email,
      password: hashedPassword,
      age,
    });

    let token = jwt.sign({ email }, "secret");
    res.cookie("token", token);
    res.send(newUser);
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

app.post("/loginUser", async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if (user) {
    let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      let token = jwt.sign({ email }, "secret");
      res.cookie("token", token);
      res.send("Login Successful");
    } else {
      res.send("Invalid Credentials");
    }
  } else {
    res.send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
