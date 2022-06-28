
var express = require('express');
var consign = require('consign');
var bodyParser=require('body-parser');
const expressValidator = require("express-validator");
var app = express();
var ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./src/resources/images'));

//app.use(expressValidator());
consign()
.include('src/routes')
.then('src/controllers')

.into(app)

module.exports = app;