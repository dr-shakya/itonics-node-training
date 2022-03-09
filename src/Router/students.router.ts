import express, { Request, Response } from 'express';
import { students } from '../students';

const studentsRouter = express.Router();

studentsRouter.get('', (req: Request, res: Response) => {
  res.status(200).json(students);
});

export default studentsRouter;
