// Minimal setup to provide a babel/webpack environ which can compile JSX

var express = require('express');
var app = express();

var router = express.Router();

/* GET home page. */
var index = router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'local variables are love' });
});

app.use('/', index);

var http = require('http');
var port = '3000'

var options = { beautify: true };
app.engine('jsx', require('express-react-views').createEngine(options));
app.set('view engine', 'jsx');
app.set('port', port);

var server = http.createServer(app);

server.listen(port)
