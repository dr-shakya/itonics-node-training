import express, { Express } from 'express';
import itemsRouter from './Router/items.router';
import studentsRouter from './Router/students.router';

const PORT = process.env.PORT || 3000;

class Server {
  private app: Express;

  constructor() {
    this.app = express();
    this.setupConfig();
    this.setupRoutes();
  }

  public setupConfig(): void {
    this.app.use(express.json());
  }

  public setupRoutes(): void {
    // STUDENTS endpoint
    this.app.use('/students', studentsRouter);
    // ITEMS Endpoint
    this.app.use('/items', itemsRouter);
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log('Listening on port:', PORT);
    });
  }
}

const server = new Server();

// Start server
server.start();
