const express = require('express');
const router = express.Router();

const movie = require('../sample.json');
console.log(movie);

router.get('/', (req, res) => {
    res.json(movie);
});

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('received');
});

module.exports = router;