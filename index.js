var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
const router = express.Router();

var path = require('path');
var app = express();
var users = require('./users')(router);

app.use(bodyparser.urlencoded({extended: false }));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/src/')); 
app.use('/', users);


app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname + '/src/index.html'));
});  


const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log("listen on port 5000")
});