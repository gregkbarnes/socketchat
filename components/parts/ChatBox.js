var React = require('react');
var io = require('socket.io-client');

var socket = io();

socket.on('chat message', function(msg) {
    console.log(socket.id + ': ' + msg);
});

socket.emit('chat message', 'wassssup');

var ChatBox = React.createClass({
    componentDidMount() {
        console.log('ChatBox Mounted');
    },
    
    handleSubmit(e) {
        e.preventDefault();
        socket.emit('chat message', this.refs.chatBoxMessage.value);
    },
    
    render() {
        return (
            <div className="chatBox">
                <form onSubmit={this.handleSubmit}>
                    <input ref="chatBoxMessage"></input>
                    <button>{"SEND"}</button>
                </form>
                <div id="chatRoom">
                </div>
            </div>
        );
    }
});

module.exports = ChatBox;
