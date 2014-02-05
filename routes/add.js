var data = require("../data.json");

exports.addFriend = function(req, res) {
	var name = req.query.name;
	var description = req.query.description;
	var friend = {
			"name": name,
			"description": description,
			"imageURL" : "http://i1.tribune.com.pk/wp-content/uploads/2012/11/464561-FacebookFriends-1352739534-663-640x480.jpg"
		};
	data["friends"].push(friend);
	res.render('add');
}