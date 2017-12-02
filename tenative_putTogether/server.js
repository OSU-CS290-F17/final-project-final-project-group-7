var port = process.env.PORT || 8742;
var path = require('path');
var express = require('express');
var lilBuddy= require('express-handlebars');
var app = express();


app.engine('handlebars', lilBuddy({ defaultLayout: 'needs' }));
app.set('view engine','handlebars');


app.get('/', function (req, res) {
  res.status(200).render('homePage');
});






app.use(express.static('public'));


app.get('*', function (req, res) {
  res.status(404).write('not found');
});



app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
