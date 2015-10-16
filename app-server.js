var express = require("express");

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/materialize-css/dist'));

app.listen(process.env.PORT, process.env.IP);

console.log("Polling server running on port" + process.env.PORT)
