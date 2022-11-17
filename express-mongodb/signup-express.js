const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const url = process.env.url;


const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('../HTML'))

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log(`CONNECTED TO MONGO!`);
    app.listen(port);
    console.log("listening on port 3000")
})
.catch((err) => {
    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    console.log(err);
})


app.use(express.static('HTML'));
const User = require('./models/user')

app.post("/signup", function (req, res) {
console.log(req.body.firstname)
console.log(req.body.lastname)
console.log(req.body.phonenumber)
console.log(req.body.emailID)
console.log(req.body.passwordID)

 const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phonenumber: req.body.phonenumber, 
    emailID: req.body.emailID, 
    passwordID: req.body.passwordID
    });

    user.save()
    .then((user)=>{
        console.log(user)
        res.redirect('dashboard.html');
        res.end("")
        
   
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('error.html')
        
    })
    
});


app.get("/", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('signup.html');

});


app.get("/signup", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('signup.html');

});