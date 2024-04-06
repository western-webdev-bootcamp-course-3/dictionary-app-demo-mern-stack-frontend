const Word = require('../models/Word');

// Create a new word
exports.createWord = async (req, res) => {
  try {
    const word = new Word({
      _id: req.body.id,
      word: req.body.word,
    });
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

// Get a word
exports.getWord = async (req, res) => {
  try {
    const word = await Word.findById(req.params.id);
    res.status(200).json(word);
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

// update a word
exports.updateWord = async (req, res) => {
  try {
    // add the new word
    const wordNew = new Word({
      _id: req.body.id,
      word: req.body.word,
    });
    await wordNew.save();

    // delete the old word
    await Word.findByIdAndDelete(req.params.id);

    // return the new word
    res.status(200).json(wordNew);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something is wrong' });
  }
};
