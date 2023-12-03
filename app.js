//module dependencies
const express = require('express');
//const routes = require('./routes');
const app = module.exports = express();

app.get('/', function(req, res){
    res.send('Hello World');
});
app.listen(3000, function(req, res){
    console.log('서버 작동');
});