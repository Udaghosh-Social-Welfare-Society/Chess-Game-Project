require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({extended:true}));


app.listen(port,()=>{
    console.log(`Server has started on port ${port}`);
});