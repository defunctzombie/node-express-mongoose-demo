var SocketIO = require('socket.io');
var pubsub = require('./lib/pubsub');


// create socketIO server
var io = new SocketIO();


pubsub.on('message', function(msg) {
  // we tell the client to execute 'new message'
  io.emit('new title', {
    message: msg
  });

  console.log('pubsub message received' , msg);
});


io.on('connection', function (socket) {

  console.log("connnection established");

  // when the client emits 'new message', this listens and executes
  socket.on('new title', function (data) {  
    console.log("new title captured");

    // we tell the client to execute 'new message'
    socket.broadcast.emit('new title', {
      message: data
    });

  });
});

module.exports = io;
