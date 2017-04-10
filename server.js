var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./config/routes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

var port = process.env.PORT || 3011;  

var router = express.Router();

router.use(function(req, res, next){
    next(); //Middleware stuff here
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

routes(router);

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);