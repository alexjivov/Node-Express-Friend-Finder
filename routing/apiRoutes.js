// DATA - linking routes to data sources (i.e. friends js)

var friends = require ('../data/friends.js'); // links to friends.js

// ROUTING - set up the routes

module.exports = function(app) { //the reverse of the exports function in friends.js
    //Handles when users visit a page/clicks a link
    app.get('/api/friends', function(req,res) {
        res.json(friends);
    
});

// POST REQUESTS - When the user submits the survey form to the server
// When the user pushes the form data as a JSON object, the object pushes to the linked JS array

app.post('/api/friends', function(req,res) {
    // Breakdown:
    // 1. Server responds to a user's result then compare against other users in DB
    // 2. Calculates differences between user number input and other inputs in DB
    // 3. Chooses user with the least number difference as a friend match
    
    // bestMatch object holds the best match - which updates as everthing loops through
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000, 
    };

    //PARSE - user survey data is parsed through
    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores;

    //Variable calculates the difference between scores
    var totalDifference = 0; 

    // Loop for possible matches in database
    for (var i=0; i < friends.length; i++) {
        
    }
}