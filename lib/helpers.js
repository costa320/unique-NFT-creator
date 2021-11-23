'use strict';
var exphbs = require('express-handlebars');
var hbs = exphbs.create({defaultLayout: 'layout', extname: '.handlebars'});
module.exports = hbs;