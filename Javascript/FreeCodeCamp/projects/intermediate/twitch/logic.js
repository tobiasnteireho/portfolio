var apiBaseUrl = "https://wind-bow.gomix.me/twitch-api";


$(document).ready(function(){
	
	function getStatus(){
	}
	
	var q = [];
	var w;
	var users = ["ESL_SC2", "OgamingSC2",
		"cretetion", "freecodecamp",
		"storbeck", "habathcx",
		"RobotCaleb", "noobs2ninjas"];
		//$("#status").append(JSON.stringify(users));
	
	/*	
	for(let n = 0; n < users.length; n++){
		$("#status").append("<div id='" + users[n] +
			"'>"+ users[n] + ":"+ "poop" + "</div><br>");

	}
	*/
	
	
	for(let i = 0; i < users.length; i++){
		/*
		$.getJSON(apiBaseUrl+"/users/" + users[i] + "?callback=?")
		.then(function(user){
			
			//if (data.
		*/
			$.getJSON(apiBaseUrl+"/streams/" + users[i] + "?callback=?")
			.done(function(stream){
				//q.push(data);
				var w = "offline";
				var z = "";
				if (stream.stream){
					if (stream.stream.hasOwnProperty("_id")){
						//w = "online";
						
						if (stream.stream.hasOwnProperty("game")){
							w = stream.stream.game + ":" + stream.stream.channel.status;
						}
					}
					
				}
				//$("#status").append(JSON.stringify(data));
				$("#status").append("<div class='entry' id='" + users[i] +
					"'>" + "<span class='username'><a href='https://www.twitch.tv/"+
					users[i] /*stream.stream.channel.profile_banner.url */ + "'>" +
					users[i] + "</a></span><span class='status'>"+ w + "</span></div>");

			});
		//});
	}
});
