// GOAL is a JSON object that looks like so:

// {
//   title: "Jaws",
//   year: 1975
// }
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema({
  title: String,
  year: Number
})

// const someMovie = new Movie({title: 'Jaws', year: 19})
module.exports = mongoose.model('Movie', Movie)
