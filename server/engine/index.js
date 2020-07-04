module.exports = function (socket) {
  socket.emit('message', 'Connected successfully');

  // socket.on("YOUR_EVENT", (input) => yourListener(input, socket));
};
