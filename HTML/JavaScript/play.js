const validateGuestForm = () => {
    let guestCode = document.forms["guestForm"]['guestID'].value;
    if (guestCode == "") {
      alert('Please input game quiz title.')
      return false;
    };

  };

const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question_type: String,
  question_text: String,
  question_possibilities: [{
    answer: String
  }],
  correct_answer: String,
  updated_at: { type: Date, default: Date.now },
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = {
  Question,
  getCorrectAnswers,
  getQuizAnswers,
}

function getCorrectAnswers() {
  return Question.find()
  .then(res => {
    return res.reduce((agg, q) => {
      agg[q._id] = q.correct_answer;
      return agg;
  }, {});
  });
}

function getQuizQuestions() {
  return Question.find()
  .then(res => {
    return res.map(q => {
      const data = q.toObject();
      const answer = data.correct_answer;
      delete data.correct_answer;
      data.question_possibilities.push({answer})
      data.question_possibilities = data.question_possibilities
      .map(d => ({answer: d.answer}));
      return data;
    })

  });
}