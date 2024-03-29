import { Server } from 'socket.io';

class SocketConnection {
  #io: Server;
  constructor(io: Server) {
    this.#io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.#io.on('connection', (socket) => {
      console.log('A user connected');
    });
  }
}

export default SocketConnection;
