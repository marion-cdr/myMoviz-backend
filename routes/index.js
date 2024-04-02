var express = require('express');
var router = express.Router();
const fetch = require('node-fetch'); 

const API_KEY = '389a4fd8bbe0a6abdcc91a16f458c97f'

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then(res => res.json())
    .then (data => {
        res.json({ movies: data.results })
    })
})

module.exports = router;
