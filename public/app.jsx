var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');
/* These are not imported here, but in Greeter since Greeter requires name and
   message variables*/
// var GreeterMessage = require('./components/GreeterMessage');
// var GreeterForm = require('./components/GreeterForm');


var country = "Intuit";
var msg = 'Time to play lame';


// LESSON:  a prop is passed to the component and it can't be altered by it; however, a component
// can alter its state, so you can set its state to the prop and manipulate the state
ReactDOM.render(
  <Greeter name={country} sms={msg}/>,
  document.getElementById('app')
);