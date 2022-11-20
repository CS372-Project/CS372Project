const User = require('../models/user');
const request = require('supertest')
const app = require('../signup-express')
const assert = require('assert');

//This is a test to delete user from user collection in database 
describe('Deleting a User', () => {
    request(app)
    it('Removes a User using its instance', (done) => {
        User.deleteOne({emailID: 'sincdl02@pfw.edu'})
            // Checking if the user was deleted from DB or not
            .then(() => User.findOne({ 
                firstname: 'Deayshia',
                lastname: 'Sincliar',
                phonenumber: '2609091657',
                emailID: 'sincdl02@pfw.edu',
                passwordID: 'gameQuiz'
             }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

});

//This is a test to add user to user collection in database
   describe('Creating documents in MongoDB', () => {
        request(app)
        it('Creates a New User', (done) => {
            const newUser = new User({
                firstname: 'Deayshia',
                lastname: 'Sincliar',
                phonenumber: '2609091657',
                emailID: 'sincdl02@pfw.edu',
                passwordID: 'gameQuiz'

            });
            newUser.save() // returns a promise after some time
                .then(() => {
                    //if the newUser is saved in db and it is not new
                    assert(!newUser.isNew);
                    done();
                });
        });
    });



    //This is a test that reads user from database in user collection to see if user is in database. 
    describe('Reading Details of User', () => {
        request(app)
        it('Finds user with the name', (done) => {
            User.findOne({
                emailID: 'sincdl02@pfw.edu'
            
            })
                .then((user) => {
                    assert(user.emailID === 'sincdl02@pfw.edu');
                    done();
                });
        })
    });

        //This is a test that reads user from database in user collection to see if user is in database. 
        describe('Reading Details of User', () => {
            request(app)
            it('Finds user with the name', (done) => {
                User.findOne({
                    emailID: 'test@gmail.com'
                
                })
                    .then((user) => {
                        assert(user.emailID === 'test@gmail.com');
                        done();
                    });
            })
        });

    describe("Updating Details of User", () => {
        request(app)
        it('Finds user with the name', (done) => {
            const filter = { emailID: 'sincdl02@pfw.edu' };
            const update = { firstname: 'Ayshia' };
            
             User.findOneAndUpdate(filter, update)
             .then((user) =>{
                assert(user.emailID === 'sincdl02@pfw.edu')
                done();
            });
        
            
        }); 
    });
      