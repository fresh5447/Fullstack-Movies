import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%'
  }
}

const MovieTile = ({movie}) => {
  return (
    <div style={styles.container} >
      <p>{movie.title}</p>
      <p>{movie.year}</p>
    </div>
  )
}

MovieTile.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieTile