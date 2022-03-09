import express, { Express } from 'express';
import itemsRouter from './Router/items.router';
import studentsRouter from './Router/students.router';
const app: Express = express();

const port = process.env.PORT || 8000;

// STUDENTS Endpoint
app.use(express.json());
app.use('/students', studentsRouter);

// ITEMS Endpoint
app.use('/items', itemsRouter);

// Start server
app.listen(port, () => {
  console.log('Listening on port:', port);
});
