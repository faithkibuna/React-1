const authRoutes = require("./routes/authRoutes");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express(); //create express application

// Middlewares
app.use(express.json()); //allows your API to recive json from frontend
app.use(cors()); //allow front and dackend communication
app.use(cookieParser()); //aalow to read cookies used in authentication

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Charity Minds API",
  });
});

module.exports = app;
