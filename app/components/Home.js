
var React = require('react');
var GetCity = require('./GetCity');

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('https://images8.alphacoders.com/462/462329.jpg')",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#000',
    fontWeight: 1000,
  },
}

function Home (props) {
  return (
    <div style={styles.container}>
      <GetCity />
    </div>
  )
}

module.exports = Home;