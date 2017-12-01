const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Movie = require('./models/Movie')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/MOVIES_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

const ourFirstMovie = {title: 'Jaws', year: 1965}

// Create A Movie
app.post('/api/movies', (req, res) => {
  const {title, year} = req.body
  const newMovie = {title, year}
  Movie(newMovie).save((err, savedMovie) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', data: savedMovie })
    }
  })
})

//Find All Movies
app.get('/api/movies', (req, res) => {
  Movie.find((err, movies) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', movies })
    }
  })
})

app.get('/api/movies/:movieId', (req,res) => {

  const movieId = req.params.movieId

  const animal = {id: 123, name: 'Boots'}
  Movie.findById({_id: movieId}, (err, movie) => {
    if(err) {
      res.json({ error: err })
    } else {
      res.json({ msg: `Found ${movie.title}`, movie: movie })
    }
  })

})

app.get('/api/random-movie', (req, res) => {
  Movie.find((err, data) => {
    if(err) {
      res.json({ error: err})
    } else {
      const allMoviesArray = data
      const randomItem = allMoviesArray[Math.floor(Math.random() * allMoviesArray.length)]
      
      res.json({msg: 'Random item Retrieved', data: randomItem})
    }
  })
})


const server = app.listen(port, () => console.log(`🔥🔥 Running on port: ${port} 🔥🔥`))

module.exports = server
