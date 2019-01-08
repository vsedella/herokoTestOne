const express = require("express");
var app = express();
const port = process.env.PORT || 4040;

app.listen(port,()=>{
    console.log("Started on port "+port);
})