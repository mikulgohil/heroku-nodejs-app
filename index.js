var express = require('express')
var app = express();
app.set('view engine', 'jade');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  response.render('index', { title: 'Hey', message: 'Hello there! Home', detail: 'Welcome to My app', link:'about'});
});

app.get('/about', function (request, response) {   response.render('index', {
title: 'Hey', message: 'This is about page!!', detail: 'Welcome to My app', link:'/'});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})