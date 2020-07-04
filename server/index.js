const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const engine = require('./engine');

const PORT = process.env.PORT || 3000;

const initEngine = () => {
  io.on('connection', (socket) => {
    console.log('a user connected');
    engine(socket);
  });
};

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  initEngine();
});
