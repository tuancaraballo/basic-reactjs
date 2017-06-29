// LESSONS #0: Components must start with capital letter
var GreeterMessage = React.createClass({
	render: function () {
		var name = this.props.name;
		var message = this.props.message;
		return (
			<div>
				<h1> Hello {name}! </h1>
				<p> Some {message}</p>
			</div>

		);
	}
});

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

var country = "Intuit";
var msg = 'Time to play lame';


// LESSON:  a prop is passed to the component and it can't be altered by it; however, a component
// can alter its state, so you can set its state to the prop and manipulate the state
ReactDOM.render(
  <Greeter name={country} sms={msg}/>,
  document.getElementById('app')
);