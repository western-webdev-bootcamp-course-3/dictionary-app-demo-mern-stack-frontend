const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  id: String,
  word: String,
});

module.exports = mongoose.model('Word', wordSchema);
