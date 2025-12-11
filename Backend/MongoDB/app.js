const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/create", async (req, res) => {
  const user1 = await userModel.create({
    name: "ved",
    email: "ved@email.com",
    username: "ved",
  });
  res.send(user1);
});

app.get("/update", async (req, res) => {
  const user2 = await userModel.findOneAndUpdate(
    { username: "ved" },
    {
      username: "ved2",
    },
    { new: true }
  );
  res.send(user2);
});

app.get("/read", async (req, res) => {
  const users = await userModel.find({  });
  res.send(users);
});

app.get("/delete", async (req, res) => {
  const users = await userModel.findOneAndDelete({ username: 'ved' });
  res.send(users);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
