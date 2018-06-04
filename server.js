// dependencies
var express = require("express");
// npm body-parser: Formatea todas las req and res in a way that is VERY EASY to manipulate.
var bodyParser = require('body-parser');
// Allows to deliver HTML pages to user easyly with out express.
var path = require("path");

var app = express();
var PORT = process.env.PORT || 7080;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


 
// ROUTES
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/app/public/home.html'));
// });

// app.get('/survey', function(req, res) {
//     res.sendFile(path.join(__dirname, '/app/public/survey.html'));
// });

// Including html routes in the server file // Our external route
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);



//Listener
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});