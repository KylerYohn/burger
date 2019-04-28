var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("./public/assets"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//set handlebars!

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import the routes and give the server access to them

var routes = require("./controller/burgers_controller");

app.use(routes);


//start the server so it can begin to listen for clien request
app.listen(PORT, function(){
    console.log("server Listening on: http://localhost:" + PORT);
})