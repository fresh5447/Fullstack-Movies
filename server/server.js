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

app.get('/api/movies', (req, res) => {
  Movie.find((err, movies) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({ msg: 'SUCCESS', data: movies })
    }
  })
})

app.post('/api/movies', (req,res) => {
  const newMovie = {
    title: req.body.title,
    year: req.body.year
  }
  Movie(newMovie).save((err, movie) => {
    if (err) {
      res.json({error: err})      
    } else {
      res.json({ msg: 'SUCCESS', data: movie })
    }
  })
})





const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
