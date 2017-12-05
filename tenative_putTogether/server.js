var port = process.env.PORT || 8742;
var path = require('path');
var express = require('express');
var lilBuddy= require('express-handlebars');
var app = express();

var data=require('./data/peopleData.json');



app.engine('handlebars', lilBuddy({ defaultLayout: 'needs' }));
app.set('view engine','handlebars');

app.get('/', function (req, res) {
  res.status(200).render('homePage',data);
});


app.get('/newPost',function (req,res){
console.log("You have sent a request to add a new post to the server.");
console.log("wtf did you send? \n ", req);
});




app.use(express.static('public'));


app.get('*', function (req, res) {
  res.status(404).write('not found');
});



app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
