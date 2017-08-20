"""
Translation of FreeCodeCamp quote project to python

Tobias Nteireho

"""

import sys
import requests
import json
import re




class Quote:
	apiUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
	tweetLinkBase = "https://twitter.com/intent/tweet?text=";
	data =""
	author =""
	text = ""
	link =""
	
	def getQuote(self):
		response = requests.get(self.apiUrl)
		
		q = re.search(r'{.*}', response.text); #forismatic is mangling json response for some reason
		
		data = json.loads(q.group(0))
		self.author = data['quoteAuthor']
		self.text = data['quoteText']
		self.link = data['quoteLink']
		
		
		return json.loads(q.group(0))  #response.json()
		
	def pretty(self):
		return self.text + "\n\n-" + self.author +"\n\n"




		
q = Quote()
q.getQuote()

print(q.pretty())
