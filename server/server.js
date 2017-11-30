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

Movie(ourFirstMovie).save((err, movie) => {
  if (err) {
    console.log(err)
  } else {
    console.log('MOVIE ADDED TO DB', movie)
  }
})

Movie.find((err, movies) => {
  if (err) {
    console.log(err)
  } else {
    console.log('****** HERES YOUR MOVIES ******', movies)
  }
})

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
