var React = require('react');

function addStyles(props){
	return {
		display: 'flex',
		flexDirection: props.direction || 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
}

function GetCity(props){
	return (
			<div style={addStyles(props)}>
				<input type='text' placeholder="Enter City, State"></input>
				<button type='button' style={{margin: 10}} className='btn btn-lg btn-success'>Get Weather</button>	
			</div>
	
	)
}
module.exports = GetCity;