var express = require('expres');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '..src/index.html'));
});

app.listen(port, fuction(err){
	if(err){
		console.log(err);
	}
	/*
	else {
		open('http://localhost:' + port);
	}
	*/
})
