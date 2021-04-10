var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname + '/templates')));

app.listen(3000, function(){
    console.log('Sercer On!');
});
