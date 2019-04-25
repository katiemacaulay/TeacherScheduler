const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const userRoutes = require("./routes/userRoute");
const scheduleRoutes = require("./routes/scheduleRoute");
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb://birdman:m3owm3ow@ds163530.mlab.com:63530/final-project', {useNewUrlParser: true});


app.use(bodyParser.json());
app.use(cookieParser())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

app.use(userRoutes);
// I don't know if this is the best place for scheduleRoutes....
app.use(scheduleRoutes);


app.use(express.static(path.resolve( __dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'.client/build/index.html'));
});

app.listen(process.env.PORT ||
  5000, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening...");
 });