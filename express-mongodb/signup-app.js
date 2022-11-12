var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('../HTML'))

app.use(bodyParser.urlencoded({
    extended:true
}))

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// Connection URI
const url = 'mongodb+srv://gamequiz:gameQuizTeam@gamequiz.9o3my64.mongodb.net/test';

// Use connect method to connect to the Server
MongoClient.connect(url, 
  {useUnifiedTopology: true}, 
  (err, client) => {
  if (err) 
    return process.exit(1)
  
  console.log('Kudos. Connected successfully to server')
  
  let db = client.db('gameQuiz')
  
  

  app.post('/signup', function(req,res){
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phonenumber =req.body.phonenumber;
    var emailID =req.body.emailID;
    var passwordID = req.body.passwordID;
    
  
    var data = {
        "firstname": firstname,
        "lastname": lastname,
        "phonenumber":phonenumber,
        "emailID":emailID,
        "passwordID":passwordID
       
    }
db.collection('users').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('signup_success.html');
})
  
  
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('signup.html');
}).listen(3000)
  
  
console.log("server listening at port 3000");



})