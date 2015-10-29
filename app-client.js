var React = require('react');
var ReactDOM = require('react-dom');
var io = require("socket.io-client");

var APP = require('./components/APP');

ReactDOM.render(<APP />, document.getElementById('react-container'));
