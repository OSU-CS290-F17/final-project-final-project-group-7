var port = process.env.PORT || 8742;
var path = require('path');
var express = require('express');
var lilBuddy= require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');
var clientDB=require('mongodb').MongoClient;

var data=require('./data/peopleData.json');





/* mongo db stuff */
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;



var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword +
  '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;


console.log(mongoURL);
var mongoConnection = null;

var allPosts= null;




app.engine('handlebars', lilBuddy({ defaultLayout: 'needs' }));
app.set('view engine','handlebars');

app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.status(200).render('homePage',data);
});

app.use('/test',function(req, res){



});

app.get('/test',function(req,res){
  res.status(200).send('yo mac its yo man randy');
});

app.use('/newPost',function (req,res,next){
console.log(req.body);


res.status(200).send("your request has been monitored");
//
// next();
});
//
// app.get('/newPost',function (req,res,next){
// console.log("You have sent a request to add a new post to the server.");
//
// });


app.get('/newPost',function (req,res,next){
console.log("You have sent a request to add a new post to the server.");

});
app.use(express.static('public'));


app.get('*', function (req, res) {
  res.status(404).write('not found');
});

function uploadJSON(file){
  allPosts=mongoConnection.collection('posts');

console.log("what we ar about to upload: ", file.posts);


   //  console.log("need to push this in: \n===",data.posts);
 for(var i=0;i<data.posts.length;i++){
     console.log('pushing: ', data.posts[i],"into the database");
   //    allPosts.insert(data[i]);
    }
}


clientDB.connect(mongoURL, function (err, connection) {
  if (err) {
    throw err;
  }
  //collect=db.collection('posts');
  mongoConnection = connection;

uploadJSON(data);
  app.listen(port, function () {
    console.log("== Server listening on port:", port);
  });

});
