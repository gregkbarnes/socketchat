var express = require("express");
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/materialize-css/dist'));

var http = require('http');
var server = http.Server(app)

server.listen(process.env.PORT, process.env.IP);
console.log("Polling server running on port" + process.env.PORT);

var io = require('socket.io')(server);

io.sockets.on('connection', function(socket){
  console.log('connected: %sd', socket.id);
})

// io.on('connection', function (socket) {
//     console.log('test')
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//     console.log('hello')
//   });
// });