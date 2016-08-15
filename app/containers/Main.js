var React = require('react');
var GetCity = require('../components/GetCity');
var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    backgroundColor: '#5e91c8',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <div style={styles.header}> 
          <h2>Weather App</h2>
          <GetCity direction='row' />
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;