var express = require("express");
var path = require("path");

var app = express();

// Pull in our data taht we want to display on our API route
var friendsData = require("../data/friends-data.js");


module.exports = function(app) {

    app.get("/api/friends", function(req,res) {
        console.log(friendsData);
        res.json(friendsData);
    });

}





// // Display all the characters
// app.get("/api/characters", function(req,res) {
//     return res.json(characters);
//   });
  
  
//   // Display a single character, or return false
//   app.get("/api/:characters?", function(req, res) {
//     var chosen = req.params.characters;
  
//     // Chosen = true, osea if chosen es creado...
//     if (chosen) {
//       console.log(chosen);
//       for(var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//           res.json(characters[i]);
//           return;
//         }
//       }
//       res.send("No character found!");
//     } else {
//       res.json(characters);
//     }
//   });