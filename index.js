require('dotenv').config({path: __dirname + '/.env'})

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

var cities = ["Indore","Mumbai","Bangalore","Chennai","Hyderabad"];
var imgUrl = "https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg";
var desc = "Hello Everyone, This is a Demo Application. Here you can add Details to the List, Details available on List Items Page."
 
app.get('/getcity', (req, res) => {
  res.json(cities);
});

app.get('/getimg', (req, res) => {
    res.json(imgUrl);
});

app.get('/getdesc', (req, res) => {
    res.json(desc);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);