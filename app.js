var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
    res.send('Hello World!');

});

URL = 'http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=lowellbander&api_key=410af592466bfb635d96c11f77053117&format=json'

request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
          //console.log(body) 
          foo = JSON.parse(body)['recenttracks']['track'][0];
          console.log(foo);
    } else {
      console.log("ERROR");
    }
})

