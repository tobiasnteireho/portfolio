var session_len = 25;
var session_mins =25;
var session_secs = 0;
var session_millis = 25*60*1000;
var break_len = 5;
var break_mins = 5;
var break_secs = 0;
var break_millis = break_mins*60*1000;
var daemonids = [];
var isSession = true;

function Daemon(){
	var id;
	var name;
}



function incSession(amt){
	session_len += amt;
	session_mins = session_len;//session_len;
	//session_secs = session_mins*60;
	session_millis = session_mins*60*1000;
	processSessionMillis();
	
}

function incBreak(amt){
	break_len += amt;
	break_mins = break_len;
	break_millis = break_mins*60*1000;
	processBreakMillis();
}

function processSessionMillis(){
	session_secs = ~~(session_millis /1000) % 60;
	session_mins = ~~(session_millis/(60*1000));
}

function processBreakMillis(){
	break_secs = Math.floor(break_millis /1000) % 60;
	break_mins = Math.floor(break_millis/(60*1000));
}

$(document).ready(function(){
	//$("#session_len").html("<p>"+session_len +"<br>");
	
	function updateClock(){
		
		var out = "";
		out += (session_mins < 10) ? ("0" + session_mins): session_mins;
		out += ":";
		out += (session_secs < 10) ? ("0" + session_secs): session_secs;
		
		processBreakMillis();
		var outb = "";
		outb += (break_mins < 10) ? ("0" + break_mins): break_mins;
		outb += ":";
		outb += (break_secs < 10) ? ("0" + break_secs): break_secs;
		
		
		
		$("#session_len").html("<p>Session: "+out+"<p>Break: " + outb);//session_mins + ":" + session_secs + "<br>");
	}
	
	function countdown(){
		//var last = Date.now();
		if (isSession)
			if (session_millis >0){
				session_millis -= 100
			} else {
				session_millis = session_len*60*1000;
				isSession = false;
			}
		else
			if (break_millis >0){
				break_millis -= 100
			} else {
				isSession = true;
				break_millis = break_len*60*1000;
			}
		processBreakMillis();
		processSessionMillis();
		updateClock();
	}
	processSessionMillis();
	updateClock();
	
	var daemonId = null;
	var isPaused = true;
	
	$("#incSession").click(function(){
		incSession(1);
		updateClock();
	});
	
	$("#decSession").click(function(){
		if (session_millis > 60000){
			incSession(-1);
			updateClock();
		}
	});
	
	$("#incBreak").click(function(){
		incBreak(1);
		updateClock();
	});
	
	$("#decBreak").click(function(){
		if (break_millis > 60000){
			incBreak(-1);
			updateClock();
		}
	});
	
	$("#start").click(function(){
		if (!daemonId){
			daemonId = setInterval(countdown, 100);
		}
		$("#start").html("Start");
	});
	
	$("#pause").click(function(){
		if (daemonId){
			clearInterval(daemonId);
			daemonId = null;
		}
		$("#start").html("Resume");
	});
	
	$("#stop").click(function(){
		if (daemonId){
			clearInterval(daemonId);
			daemonId = null;
		}
		$("#start").html("Stop");
			//setSessionLen(25);
			session_millis = session_len*60*1000;
			processBreakMillis();
			processSessionMillis();
			updateClock();
	});

});
