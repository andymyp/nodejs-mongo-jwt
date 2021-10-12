const mongoose = require("mongoose");
const winston = require("winston");

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  "mongodb+srv://andymyp:15041997myp@crud.xcu9g.mongodb.net/course?retryWrites=true&w=majority";

module.exports = () => {
  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => winston.info("MongoDB Connected..."));
};
