var quoteAPIURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

function Quote(){
  
  this._data = "";
  this.x = "";
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  
  this.author ="";
  this.text = "";
  this.link = "";
  
  var tweetLinkBase = "https://twitter.com/intent/tweet?text=";
  
  this.tweetLink = tweetLinkBase + this.text;
  
  this.getNew = function(){
	
	return $.getJSON(url);
  }
  
  this.quotify = function(){
	  var ret = $.getJSON(url);
	  ret.done(function(data){
		  this.author = data.quoteAuthor;
		  this.text = data.quoteText;
		  this.link = data.quoteLink;
		  this.tweetLink = tweetLinkBase + this.text;
	  });
	  return ret;
  }

  
}


$(document).ready(function(){
  //var quote = genQuote(quoteAPIURL);
  //genQuote(quoteAPIURL);
  //alert("poop");
  var q = new Quote();
  var jp = q.getNew();
  
  /*
  var w;
  
  
  jp.done(function(data){
	  w = data;
	  $("#thequote").html(JSON.stringify(data));

	  
  });
 
  jp.then(function(data){
  $("#thequote").html(JSON.stringify(data));
  });
  */
  dispQuote();
  
  function dispQuote(){
  var e = q.quotify().then(function(data){
	  $("#thequote").html("<p>" + "<a href=\"" + this.link +"\">\"" + this.text +"\"</a>");
	  $("#theAuthor").html("<p>-" +this.author);
	  $("#tweetLink").attr("href", this.tweetLink);
	  
  });
  }
  
  $("#newQuote").click(dispQuote);
  $("tweetQuote").click(function(){
	    $("#thequote").html(JSON.stringify(data));

  });
  
  
    
});
