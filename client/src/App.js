import React, {Component} from 'react'
import MovieList from './MovieList'
import $ from 'jquery'

class APP extends Component {
  state = {
    movies: undefined
  }

  componentDidMount() {
    this.loadMoviesFromServer()
  }

  loadMoviesFromServer = () => {
    $.ajax({
      url: '/api/movies',
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({ movies: response.movies })
    })
  }

  submitMovieToServer = () => {
    const newMovie = {title: 'Superman', year: 1997 } // replace with state
    $.ajax({
      url: '/api/movies',
      method: 'POST',
      data: newMovie
    }).done((response) => {
      console.log(response)
      this.loadMoviesFromServer() // Will refresh the state ie movies list
    })
  }


  render () {
    return (
      <div>
        <button onClick={this.submitMovieToServer}>Submit Movie</button>
      </div>
    )
  }
}

export default APP
