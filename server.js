const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use([express.urlencoded({ extended: true }), express.json()]);
app.use(cors());

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnitfiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// Link API Routes here

app.listen(PORT, () => {
  console.log(
    "🚀  Server server now on port",
    PORT,
    "👻 React App on Port 3000"
  );
});
