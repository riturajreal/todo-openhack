const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();


app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/todo-openhack')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send("Hello you are on root");
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});