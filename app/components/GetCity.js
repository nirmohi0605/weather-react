var React = require('react');

var GetCity = React.createClass({
	render: function(){
		return (
			<div>
			<input type='text' placeholder="Enter City, State"></input>
			<div>
				<button type='button' className='btn btn-lg btn-success'>Get Weather</button>
			</div>	
			</div>
		)
	}
});
module.exports = GetCity;