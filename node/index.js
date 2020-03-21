var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());


var port = 3000;

require('./database/db');
require("./services/service");


var crud = require("./routes/crud");
app.use(crud);


app.use(express.static('angular'));



app.listen(port, function(){
    console.log('Server started on port '+port);
});