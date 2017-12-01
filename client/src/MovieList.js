import React from 'react'
import MovieTile from './MovieTile'

const MovieList = ({movies}) =>
  <div>
    <h1> Movie List </h1>
    {
      movies.map((item, index) => {
        return <MovieTile key={index} movie={item} />
      })
    }
  </div>

export default MovieList