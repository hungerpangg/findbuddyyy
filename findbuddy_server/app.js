const express = require('express');
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser');
const routes = require('./src/routes/routes');

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(routes);

// database connection
const dbURI = 'mongodb+srv://pangkawai:Singapore2023@cluster0.boyr2za.mongodb.net/findbuddy';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('DB connected')
    app.listen(3000)})
  .catch((err) => console.log(err));
