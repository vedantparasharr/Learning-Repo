const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

app.post("/create", async (req, res) => {
  const { name, username, email, image } = req.body;
  const createdUser = await userModel.create({
    name,
    username,
    email,
    image,
  });
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deletedUser = await userModel.findByIdAndDelete(id);
  res.redirect("/read");
});

app.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const editingUser = await userModel.findById(id);
  res.render("edit", { user: editingUser });
});

app.post("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { name, username, email, image } = req.body;
  const updatingUser = await userModel.findByIdAndUpdate(
    id,
    {
      name,
      username,
      email,
      image,
    },
    { new: true }
  );
  res.redirect("/read");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
