const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  _id: String,
  word: String,
});

module.exports = mongoose.model('Word', wordSchema);
