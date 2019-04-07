const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();

mongoose.connect('mongodb://birdman:m3owm3ow@ds163530.mlab.com:63530/final-project', {useNewUrlParser: true});

const userRoutes = require("./Routes/userRoute")

app.use(bodyParser.json());
app.use(userRoutes);


app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for user", err);
 });