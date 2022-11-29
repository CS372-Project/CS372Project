const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    Questions: [{
        question: { type: String },
        choices: [{ type: String }],
        correct: { type: String }
    }],
    creator: {
        type: String,
        required: true
    }

}, { timestamps: true })

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;