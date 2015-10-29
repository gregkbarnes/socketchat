var React = require('react');
var io = require('socket.io-client');

var Header = require('./parts/Header.js');

var APP = React.createClass({
  componentWillMount() {
    this.socket = io('https://socketchat-gregkbarnes.c9.io:8080'); {/* Environment dependant */}
    this.socket.on('connect', this.connect);
  },
    
  connect() {
    console.log('connected ' + this.socket.id);
  },
    
  render() {
    return(
      <div>
        <Header title="New Header" />
      </div>
    );
  }
});

module.exports = APP;
