const express = require('express');
const wordController = require('../controllers/wordController');

const router = express.Router();

router.post('/words', wordController.createWord);
router.get('/words', wordController.getWords);
router.delete('/words/:id', wordController.deleteWord);

module.exports = router;