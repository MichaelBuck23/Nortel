var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public/examples/realtime'));

app.listen(process.env.PORT || 3000);