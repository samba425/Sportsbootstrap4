var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyparser.urlencoded({extended: false }));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/src/')); 

app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname + '/src/index.html'));
});  


const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log("listen on port 5000")
});