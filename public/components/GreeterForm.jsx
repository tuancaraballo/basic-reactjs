var React = require('react');

var GreeterForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();// this prevents the browse from refreshing the app.

		var name = this.refs.name.value; // NOTE: see how you get the value of the form 
		var message = this.refs.textMessage.value;


		var updates = {}; 
		if (name.length > 0) {
			this.refs.name.value = ''; // ---> Notice here how setting this to '' works kinda by reference
			updates.name = name;
		}

		if (message.length > 0) {
			this.refs.textMessage.value = ''; // ---> Notice here how setting this to '' works kinda by reference
			updates.message = message;
		}

		this.props.onNewData(updates);
	}, 
	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type='text' ref='name' placeholder='Enter name'/> 
				</div>
				
				<div>
					<textarea rows="4" cols="50" ref='textMessage' placeholder='Enter message'></textarea>
				</div>

				<div>
					<button> Submit </button>
				</div>
			</form>
		);
	}
});

module.exports = GreeterForm;
