var express = require('express');

var app = express();

// folder to expose to web server
app.use(express.static('public'));


app.listen('3000', function() {
    console.log('Server listening to port 3000 ...');
});