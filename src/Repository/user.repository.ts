import { EntityRepository, Repository } from 'typeorm';
import { User } from '../Model/user.model';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
