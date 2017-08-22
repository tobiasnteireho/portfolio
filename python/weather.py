"""
Free Code Camp Weather Project
in Python!!!
Tobias Nteireho
20170815
"""

import sys
import json
import requests

class Location:

	locAPIURL = "https://ipinfo.io/json";

	def getLoc(self):
		response = requests.get(self.locAPIURL)
		data = response.json()
		self.city = data["city"]
		coords = data["loc"].split(",")
		self.lat = coords[0]
		self.lon = coords[1]
		
	def __init__(self):
		pass


class Weather:

	
	apiURL = "https://fcc-weather-api.glitch.me/api/current?";
	
	def getWeather(self):
		
		response = requests.get(self.apiURL + "lon=" + self.loc.lon + 
			"&lat=" + self.loc.lat);
			
		data = response.json()
		self.temp = data["main"]["temp"]
		self.description = data["weather"][0]["description"]
		
	
	def __init__(self, loc):
		self.loc = loc

loc = Location()
loc.getLoc()

print("Current weather in " + loc.city)

weather = Weather(loc)
weather.getWeather()
print("%.2f degrees C and %s" %(weather.temp, weather.description))
