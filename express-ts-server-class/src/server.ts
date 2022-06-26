import express, { Express } from 'express';
import morgan from 'morgan';
import helloRoutes from './routes/hello.routes';
import cors from 'cors';

class Server {
  #app: Express;
  #port: number;
  constructor() {
    this.#app = express();
    this.middlewares();
    this.routes();
    this.#port = Number(process.env.PORT ?? 4000);
  }
  middlewares() {
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(cors());
    this.#app.use(morgan('dev'));
  }

  routes() {
    this.#app.use(helloRoutes);
  }

  listen() {
    this.#app.listen(this.#port, () => {
      console.log(`Server is running on port ${this.#port} 🎉`);
    });
  }
}

export default Server;
