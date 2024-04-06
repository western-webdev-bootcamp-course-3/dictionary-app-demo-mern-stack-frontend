const express = require('express');
const wordController = require('../controllers/wordController');

const router = express.Router();

router.post('/', wordController.createWord);
router.get('/', wordController.getWords);
router.get('/:_id', wordController.getWord);
router.put('/:_id', wordController.updateWord);
router.delete('/:_id', wordController.deleteWord);

module.exports = router;