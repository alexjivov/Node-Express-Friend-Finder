// Include path package for html
var path = require("path");

// ROUTES

module.exports = function(app){

    //HTML GET - when a user visits a page they are shown an HTML page of content
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // default to homepage if route is invalid
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}

