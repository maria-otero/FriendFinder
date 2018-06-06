var express = require("express");
var path = require("path");

var app = express();

// Pull in our data that we want to display on our API route
var friendsData = require("../data/friends-data.js");
console.log(friendsData);


module.exports = function(app) {

    // GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req,res) {
        // console.log(friendsData);
        return res.json(friendsData);
    });

    // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user to the server
        // This works because of our body-perser middleware
        var newfriend = req.body;
        console.log(newfriend);


        // Comparation code
        // Compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDiff` 
        // * Example: 
        // * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
        // * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
        // * Total Difference: **2 + 1 + 2 =** **_5_**
        var match;
        var matchScore = 100;
        for (var i = 0; i < friendsData.length; i++) {
            // Looping through friends objects
            var currentFriend = friendsData[i];
            var totalDiff = 0;
            // Looping through score arrays
            for (var x = 0; x < currentFriend.scores.length; x++) {
                //Use the absolute value of the differences
                // console.log(newfriend + "line 43");
                
                totalDiff += Math.abs(newfriend.scores[x] - currentFriend.scores[x]);
            }
            // Match!
            // * The closest match will be the user with the least amount of difference.
            if (totalDiff < matchScore) {
                matchScore = totalDiff;
                match = currentFriend;
            }
        }
        // Puch the new friend into de friends-data objet array
        friendsData.push(newfriend);
        console.log(match);
        return res.json(match);
        
    });      
}



