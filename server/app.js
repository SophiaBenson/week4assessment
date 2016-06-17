var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/week4animals';
var randomNumber = require('../modules/randoNum');

app.use( express.static( 'public' ) );

app.get('/', function (req, res) {
  console.log( 'Bird is in the base url' );
  res.sendFile( path.resolve( 'view/index.html' ) );
}); // end base url

app.listen(3000, 'localhost', function (req, res) {
  console.log("server is listening on 3000");
});

app.post('/postRoute', urlencodedParser, function (req, res) {
  console.log("Bird is in POST with: " + req.body.animal);
  var numGenerator = randomNumber(req.body);
  console.log("bird with: " + numGenerator);
  res.send(numGenerator.toString());
  pg.connect( connectionString, function(err, client, done){
      client.query("INSERT INTO zoo (animal, amount) VALUES ($1, $2)", [req.body.animal, numGenerator]);
});
});
