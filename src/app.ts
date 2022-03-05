import express, { Express, Request, Response } from 'express';
import { students } from './students';
const app: Express = express();

const port = process.env.PORT || 8000;

app.get('/students', (req: Request, res: Response) => {
  res.status(200).json(students);
});

// Start server
app.listen(port, () => {
  console.log('Listening on port:', port);
});
