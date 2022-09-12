require("dotenv").config();
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");
const path = require("path");

const app = express();

const uri = process.env.DB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("connected to MongoDb !"))
  .catch((err) => console.error("Error connecting to MongoDb : ", err));

app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
