import React, {Component} from 'react'
import MovieList from './MovieList'
import MovieForm from './MovieForm'
import $ from 'jquery'

class APP extends Component {
  state = {
    movies: undefined,
    title: undefined,
    year: undefined
  }

  componentDidMount() {
    this.loadMoviesFromServer()
  }

  loadMoviesFromServer = () => {
    $.ajax({
      url: '/api/movies',
      method: 'GET'
    }).done((response) => {
      //console.log(response)
      this.setState({ movies: response.data })
    })
  }

  submitMovieToServer = () => {
    const newMovie = { title: this.state.title, year: this.state.year }
    $.ajax({
      url: '/api/movies',
      method: 'POST',
      data: newMovie
    }).done((response) => {
      console.log(response)
      //this.loadMoviesFromServer() // Will refresh the state ie movies list
    })
  }

  onTitleChange = (e) => this.setState({ title: e.target.value })
  onYearChange = (e) => this.setState({ year: e.target.value })


  render () {
    return (
      <div>
        <MovieForm
          submitMovieToServer={this.submitMovieToServer}
          onTitleChange={this.onTitleChange}
          onYearChange={this.onYearChange}
        />
        {
          this.state.movies
          ? <MovieList movies={this.state.movies} />
          : 'No movies! Better add one😭'
        }
      </div>
    )
  }
}

export default APP
