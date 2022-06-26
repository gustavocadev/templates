import express, { Express } from 'express';
import morgan from 'morgan';
import helloRoutes from './routes/hello.routes';
import cors from 'cors';
import * as SocketIO from 'socket.io';
import http from 'http';
import Socket from './sockets/sockets.controller';

class Server {
  #app: Express;
  #port: number;
  #server: http.Server;
  #io: SocketIO.Server;
  constructor() {
    this.#app = express();
    this.middlewares();
    this.#server = http.createServer(this.#app);
    this.#io = new SocketIO.Server(this.#server);
    this.routes();
    this.#port = Number(process.env.PORT ?? 4000);
  }
  middlewares() {
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(cors());
    this.#app.use(morgan('dev'));
  }

  sockets() {
    new Socket(this.#io);
  }

  routes() {
    this.#app.use(helloRoutes);
  }

  listen() {
    this.#server.listen(this.#port, () => {
      console.log(`Server is running on port ${this.#port} 🎉`);
    });
  }
}

export default Server;
