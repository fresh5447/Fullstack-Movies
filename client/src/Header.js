import React from 'react'

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#cecece',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '3%'
  }
}
const Header = () =>
  <div style={styles.container} >
    <h1>Awesome Movie App</h1>
  </div>

export default Header