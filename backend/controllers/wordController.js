const Word = require('../models/Word');

// Create a new word
exports.createWord = async (req, res) => {
  try {
    const word = new Word(req.body);
    await word.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all words
exports.getWords = async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something is wrong' });
  }
};

// delete a word
exports.deleteWord = async (req, res) => {
  try {
    const word = await Word.findByIdAndDelete(req.params.id);
    res.status(200).json({ result: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something is wrong' });
  }
};