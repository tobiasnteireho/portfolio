/*
Free Code Camp Weather Project
Tobias Nteireho
20170715
*/
$(document).ready(function(){

var locAPIURL = "https://ipinfo.io/json";
var apiURL = "https://fcc-weather-api.glitch.me/api/current?";
var weather;

var locJ;
var isGeoError = false;
var nav = navigator.geolocation.getCurrentPosition(
function(position){
	$("#latitude").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	update();
}, function(){
	//$("#latitude").val("lat");
	//$("#longitude").val("lon");
	
	//ip fallback
	isGeoEror = true;
	locJ = $.getJSON(locAPIURL).done(function(data){
	var loc = data.loc.split(",");
	$("#latitude").val(loc[0]);
	$("#longitude").val(loc[1]);
	});
	update();
});

/*
//TODO: wrap nav.geo in promise
$.when(nav).done(function(){
	update();
});
*/


/*
if (($("#latitude").val() === "lat") || 
	($("#longitude").val() === "lon"))
	

if (isGeoError){
	locJ = $.getJSON(locAPIURL).done(function(data){
	var loc = data.loc.split(",");
	$("#latitude").val(loc[0]);
	$("#longitude").val(loc[1]);
	});
}
*/

function update(){
	var url = apiURL + "lat=" + $("#latitude").val()+ "&lon=" + $("#longitude").val();
	$.getJSON(url, function(data){
		var temp = data.main.temp;
		if ($("#scaleF").prop("checked")){
			temp = temp*9/5+32;
		}
		$("#current_weather").removeClass("animated fadeIn");
		$("#current_weather").html(temp + " degrees and " + data.weather[0].description + "<br>" + "<img width=\"250px\" src=" + data.weather[0].icon +">");
		$("#current_weather").addClass("animated fadeIn");
	});
}

$("#checkWeather").click(update);

$("input[name=scale]").click(update);

});
