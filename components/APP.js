var React = require('react');
var io = require('socket.io-client');

var Header = require('./parts/Header.js');
var ChatBox = require('./parts/ChatBox.js');

var APP = React.createClass({
  componentWillMount() {
    this.socket = io('https://socketchat-gregkbarnes.c9.io:8080'); {/* Environment dependant */}
    this.socket.on('connect', this.connect);
  },
  
  connect() {
    console.log('Connected: ' + this.socket.id);
  },
    
  render() {
    return(
      <div>
        <Header title="SocketChat" />
        <ChatBox poopie={this.socket} />
      </div>
    );
  }
});

module.exports = APP;
