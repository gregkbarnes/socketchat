var React = require("react");
var io = require('socket.io-client');

var APP = React.createClass({
    componentWillMount() {
      this.socket = io('https://socketchat-gregkbarnes.c9.io:8080'); 
      this.socket.on('connect', this.connect);
    },
    
    connect() {
      console.log('connected ' + this.socket.id)  
    },
    
    render() {
        return(
            <h1>Hello from react</h1>
        );
    }
});

module.exports = APP;
