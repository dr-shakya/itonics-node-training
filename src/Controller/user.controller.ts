import { Request, Response, Router } from 'express';
import { getConnection } from 'typeorm';
import { User } from '../Model/user.model';

export class UserController {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private async getAllUser(req: Request, res: Response) {
    try {
      const userRepository = getConnection('test').getRepository(User);
      const user = await userRepository.find();
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  private async addUser(req: Request, res: Response) {
    const user = new User();
    user.firstName = 'Jack';
    user.lastName = 'Doe';
    user.age = 27;

    const result = await getConnection('test').manager.save(user);
    return res.status(200).json(result);
  }

  private async removeUser(req: Request, res: Response) {
    const user = new User();
    user.id = 7;
    user.firstName = 'Jack';
    user.lastName = 'Doe';
    user.age = 27;

    const result = await getConnection('test').manager.remove(user);
    return res.status(200).json(result);
  }
  public getRouter(): Router {
    return this.router;
  }

  public initializeRoutes() {
    this.router.get('', this.getAllUser);
    this.router.post('', this.addUser);
    this.router.delete('', this.removeUser);
  }
}
