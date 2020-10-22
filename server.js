//DEPENDENCIES
const express = require("express");
const fs = require("fs");

//EXPRESS APP
const app = express();
const PORT = 8080;

//STARTS THE SERVER
app.listen(PORT, function (){
    console.log("App listening on PORT" + PORT );
})