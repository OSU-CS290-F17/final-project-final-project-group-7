var port = process.env.PORT || 8742;
var path = require('path');
var express = require('express');
var lilBuddy= require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');
var clientDB=require('mongodb').MongoClient;

//var data=require('./data/peopleData.json');
var data;
//fille this variable to instruct that there is additional content from jsonFile
var jsonFile=null;
////





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
var database=null; // the db object
var allPosts= null;




app.engine('handlebars', lilBuddy({ defaultLayout: 'needs' }));
app.set('view engine','handlebars');

app.use(bodyParser.json());


app.get('/', function (req, res) {

  res.status(200).render('homePage',{posts: allPosts});
});

app.use('/test',function(req, res){



});

app.get('/test',function(req,res){
  res.status(200).send('yo mac its yo man randy');
});

app.use('/newPost',function (req,res,next){
console.log("=====\n",req.body,"\n=======");
var post=req.body;
if(post){
  database.insert(post);
}
res.status(200).send("completed succ ");
//

});

app.use('/posts/:postId',function(req,res,next){
  var postID=Number(req.params.postId);
  var counter=0;
console.log("looking for the ", postID ,"th post");

for(var post of allPosts) {
    if(postID==counter){
      console.log("we found match!!!\n===", post);
      break;
    }


    counter+=1;
  }

  console.log("we wil be sending this post: ", allPosts[counter]);
    res.status(200).render('postPage', allPosts[counter]);



});

// app.get('/newPost',function (req,res,next){
//
//
//
// });
app.use(express.static('public'));


app.get('*', function (req, res) {
  res.status(404).render('404');
});

function uploadJSON(file){

console.log("what we ar about to upload: ", file.posts);


   //  console.log("need to push this in: \n===",data.posts);
 for(var i=0;i<data.posts.length;i++){
     console.log('pushing: ', data.posts[i],"into the database");
       allPosts.insert(data.posts[i]);
    }
}



clientDB.connect(mongoURL, function (err, connection) {
  if (err) {
    throw err;
  }
  //collect=db.collection('posts');
  mongoConnection = connection;
  database=mongoConnection.collection('posts')
  database.find({}).toArray(function (err,results){
    if(err){
      throw err;
    }
    else{
      allPosts=results;
    }
  });

if(jsonFile){
  console.log("We Will now upload the file: ", jsonFile);
 uploadJSON(jsonFile);
}
else{
  console.log("No json file to upload, resume build.");
}




 app.listen(port, function () {
    console.log("== Server listening on port:", port);
  });

});
