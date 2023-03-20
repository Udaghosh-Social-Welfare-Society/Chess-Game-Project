require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require ("./database.js")

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
    extended: true
  }));

dbConnection();

app.listen(port,()=>{
    console.log(`Server has started on port ${port}`);
});