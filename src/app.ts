require('dotenv').config();
import express, { Express } from 'express';
import { createConnection, getConnection } from 'typeorm';
import itemsRouter from './Router/items.router';
import studentsRouter from './Router/students.router';
const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME } = process.env;

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

  public async setupRoutes(): Promise<void> {
    await createConnection({
      name: 'test',
      type: 'postgres',
      host: DB_HOST,
      port: 5432,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      synchronize: true
    });

    console.log(getConnection('test'));

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
