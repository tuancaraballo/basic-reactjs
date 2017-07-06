var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter =  React.createClass({
// LESSON #1: a component is not allowed to update its props, but it's allowed to update
// its state. Notice the difference in use between state and props.

// this is a built in function
	getDefaultProps: function () {
		return {
			// these must match the attributes
			name: 'React',
			sms: 'This is a component'
		}
	},
// this another built in function
// LESSON #2:  a prop is passed to the component and it can't be altered by it; however, a component
// can alter its state, so you can set its state to the prop and manipulate the state
	getInitialState: function () {
		return {
			name: this.props.name,
			message: this.props.sms
		}
	},
	handleNewData: function (updates) {
// LESSON #3: Sets the state only if data has been entered
		this.setState(updates);	
	},
 // this is a built in function
	render: function () {
		var name = this.state.name;
		var message = this.state.message;
		return  (
			// there can only be one root component, only one div
			<div>
				<GreeterMessage name={name} message={message}/> 
				<GreeterForm onNewData={this.handleNewData}/>
			</div>
		);
	}
});

module.exports = Greeter;
