const mongoose = require("mongoose");
require("dotenv").config();

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error conecting to MongoDB", error.message);
  }
};
module.exports = databaseConnection;
