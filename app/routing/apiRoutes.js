//get the path dependency
var friends = require("../data/friends.js");
//set up friends route
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		//used to display a JSON of all possible friends
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		var matchUp = {
			name: "",
			photo: "",
			//this is for having a number for difference between two people
			differentialcounter: 100
		};

		var userInfo = req.body;
		var userScores = userInfo.scores;

		var totalDifference = 0;

		for(var i = 0; i < friends.length; i++) {
			//make sure tat totalDifference starts out at zero as we begin the loop
			totalDifference = 0;

			for(var j = 0; j < friends[i].scores[j]; j++) {
				totalDifference = totalDifference + Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				if(totalDifference <= matchUp.differentialcounter) {
					matchUp.name = friends[i].name;
					matchUp.photo = friends[i].photo;
					matchUp.differentialcounter = totalDifference;
				}
			}
		}
		friends.push(req.body);
		res.json(matchUp);
	});
};