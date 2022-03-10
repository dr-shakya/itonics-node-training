import express, { Request, Response } from 'express';
import { mockStudents } from '../Mock/mockData';

const studentsRouter = express.Router();

studentsRouter.get('', (req: Request, res: Response) => {
  res.status(200).json(mockStudents);
});

export default studentsRouter;
