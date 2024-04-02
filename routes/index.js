var express = require('express');
var router = express.Router();
const fetch = require('node-fetch'); 

// const API_KEY = process.env.API_KEY

router.get('/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ee8d063f9e3483140eea927c147ab7fa')
    .then(res => res.json())
    .then (data => {
        res.json({ movies: data.results })
    })
})

module.exports = router;
