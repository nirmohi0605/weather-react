var React = require('react');

function addStyles(props){
	return {
		display: 'flex',
		flexDirection: props.direction || 'column',
		justifyContent: 'center'		
	}
}

function GetCity(props){
	return (
			<div style={addStyles(props)}>
				<input type='text' placeholder="Enter City, State"></input>
				<div>
					<button type='button' className='btn btn-lg btn-success'>Get Weather</button>
				</div>	
			</div>
	
	)
}
module.exports = GetCity;