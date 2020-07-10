import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import io from "socket.io-client";
import SocketContext from './libft/SocketContext';

// @ts-ignore
const socket = io(process.env.REACT_APP_SOCKET_SERVER_URL || "http://localhost:3000");

ReactDOM.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <App />
    </SocketContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
