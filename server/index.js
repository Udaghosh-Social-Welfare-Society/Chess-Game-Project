require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
    extended: true
  }));


  

app.listen(port,()=>{
    console.log(`Server has started on port ${port}`);
});