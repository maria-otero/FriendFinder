var express = require("express");
var path = require("path");

var app = express();

// Pull in our data that we want to display on our API route
var friendsData = require("../data/friends-data.js");


module.exports = function(app) {

    // Display all friends
    app.get("/api/friends", function(req,res) {
        console.log(friendsData);
        return res.json(friendsData);
    });

    //Create a new friend – push it into the array
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user to the server
        // This works because of our body-perser middleware
        var newfriend = req.body;

        // Useing a RexEx Pattern to remove spaces from newCharacter
        // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
        console.log(newfriend);

        //QUESTION!!! How I can push the new info in the friendsArr that is inside /data/friends-data??
        friendsData.push(newfriend);

        return res.json(newfriend);
    });
        
}


// 4. Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 


// 6. Determine the user's most compatible friend using the following as a guide:
//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.




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