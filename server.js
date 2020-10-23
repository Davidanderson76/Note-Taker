// DEPENDENCIES
const express = require("express");
const fs = require("fs");


//EXPRESS APP

var app = express();
var PORT = process.env.PORT || 8080

// DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// LISTENING ON SERVER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
