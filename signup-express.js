const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const url = process.env.url;


const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('../HTML'))

app.use(express.static('../CS372Project'))

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
        app.listen(port);
        console.log(`listening on port ${port}`)
    })
    .catch((err) => {
        console.log(`OH NO! MONGO CONNECTION ERROR!`);
        console.log(err);
    })


app.use(express.static('HTML'));
const User = require('./models/user');
const Quiz = require('./models/quiz');

app.post("/HTML/createQuiz.html", function (req, res) {

    let quiz_body = req.body
    let quiz = new Quiz()
    if (quiz_body.signal === 'saving') {
        quiz.title = quiz_body.title
        for (let i = 0; i < quiz_body.count; i++) {
            quiz.Questions[i] = {
                question: quiz_body.question[i],
                choices: quiz_body[`selection${i + 1}`],
                correct: quiz_body[`group${i + 1}`],
            }
        }
        quiz.creator = quiz_body.creator
        quiz.save()
            .then((user) => {
                console.log(user)
                res.redirect('dashboard.html');
                res.end("")
            }).catch((err) => {
                console.log(err);
                res.redirect('error.html')
            })
    }
    else {
        let filter = { title: `${quiz_body.title}`, creator: `${quiz_body.creator}` }
        Quiz.findOneAndDelete(filter, function (err, doc) {
            if (err) console.log(err)
            else console.log("Deleted Quiz: ", doc)
            res.redirect("dashboard.html")
        })

    }

})

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
        .then((user) => {
            console.log(user)
            res.redirect('dashboard.html');
            res.end("")


        })
        .catch((err) => {
            console.log(err);
            res.redirect('error.html')

        })

});

app.post("/login", function (req, res) {
    var emailID = req.body.emailID;
    var passwordID = req.body.passwordID;

    console.log(emailID);
    console.log(passwordID);


    User.findOne({ emailID: emailID, passwordID: passwordID }, function (err, user) {

        if (err) {
            console.log(err);

        }
        if (!user) {
            return res.redirect('error2.html');
        }
        else if (user) {
            return res.redirect('dashboard.html');
        }
    })


});


app.get("/", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('index.html');

});


app.get("/signup", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('signup.html');

});

app.get("/login", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('login.html');

});


app.get("/gameSetup", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('gameSetup.html');

});

app.get("/play", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('play.html');

});


app.post("/play", function (req, res) {
    var title = req.body.title;

    console.log(title);

    Quiz.findOne({ title: title }, function (err, quiz) {

        if (err) {
            console.log(err);

        }
        if (!quiz) {

            return res.redirect('play.html');


        }
        else if (quiz) {
            return res.redirect('gameSetup.html');
        }
    })

});

app.post("/dashboard", function (req, res) {
    Quiz.find({}, function (err, quizes) {
        console.log(quizes)
        if (err) {
            console.log(err);
        }
        let games = [];
        for (let index = 0; index < quizes.length; index++) {
            const quiz = quizes[index];
            games.push({title: quiz.title, creator:quiz.creator});//TODO
            // games.push({title: quiz.title, link:"/quiz/"+quiz.ID, creator:quiz.creator});
        }
        return res.json(games);
    })
});

app.get("/dashboard", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('dashboard.html');

});
