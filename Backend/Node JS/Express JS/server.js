const path = require("path");
const express = require("express");
const { logger } = require("./logEvents");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(logger);
const whitelist = ["https://www.google.com", "https://www.youtube.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

//MIDDLEWARES
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MAPPING URLS
app.get(/^\/$|index(.html)?/, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get(/^\/new-page(.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
app.get(/^\/old-page(.html)?$/, (req, res) => {
  res.redirect(301, "/new-page.html");
});

app.get(
  "/hello.html",
  (req, res, next) => {
    console.log("attempted to load hello");
    next();
  },
  (req, res) => {
    res.send("Hello World");
  }
);

const one = (req, res, next) => {
  console.log("One");
  next();
};
const two = (req, res, next) => {
  console.log("Two");
  next();
};
const three = (req, res) => {
  console.log("Three");
};

app.get(/\/test(.html)?/, [one, two, three]);

app.get(/.*/, (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
