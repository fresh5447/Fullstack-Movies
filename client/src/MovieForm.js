import React from 'react'

const MovieForm = ({onTitleChange, onYearChange, submitMovieToServer}) => {
  return (
    <form>
      <label>Enter a title for the movie you would like to add:</label>
      <input type='text' onChange={onTitleChange} />

      <label>Enter the year the movie came out:</label>
      <input type='number' onChange={onYearChange} />
      <button onClick={this.submitMovieToServer}>Submit Movie</button>
    </form>
  )
}

export default MovieForm