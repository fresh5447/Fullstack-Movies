import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    fontFamily: 'Ariel',
    letterSpacing: '3px',
    fontSize: '25px',
    color: '#262626',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '1px dotted black',
    borderRadius: '5px',
    width: '70%',
    height: '250px',
    backgroundColor: '#FDE3A7'
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50px'
  }
}

const MovieForm = ({onTitleChange, onYearChange, submitMovieToServer}) => {
  return (
    <form style={styles.container}>
      <div style={styles.label}>
        <label>Enter a title for the movie you would like to add:</label>
        <input type='text' onChange={onTitleChange} />
      </div>

      <div style={styles.label}>
        <label>Enter the year the movie came out:</label>
        <input type='number' onChange={onYearChange} />
      </div>
      <button onClick={submitMovieToServer}>Submit Movie</button>
    </form>
  )
}

MovieForm.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onYearChange: PropTypes.func.isRequired,
  submitMovieToServer: PropTypes.func.isRequired
}

export default MovieForm