require('dotenv').config();
import 'reflect-metadata';
import express, { Express } from 'express';
import { createConnection } from 'typeorm';
import { UserController } from './Controller/user.controller';
import itemsRouter from './Router/items.router';
import { User } from './Model/user.model';
const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME } = process.env;

const PORT = process.env.PORT || 3003;

class Server {
  private app: Express;
  private userController!: UserController;

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
      synchronize: true,
      entities: [User]
    });

    this.userController = new UserController();

    // ITEMS Endpoint
    this.app.use('/items', itemsRouter);
    // USERS Endpoint
    this.app.use('/users', this.userController.getRouter());
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
