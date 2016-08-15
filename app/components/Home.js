var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('https://images8.alphacoders.com/462/462329.jpg')",
    // backgroundImage: "url('http://www.planwallpaper.com/static/images/sea-background01-o.jpg')",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    color: '#000',
    fontSize: '50px'
  },
}

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter City and State</h1>
      <GetCityContainer />
    </div>
  )
}

module.exports = Home;