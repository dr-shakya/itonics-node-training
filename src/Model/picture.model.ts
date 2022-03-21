import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.model';

@Entity('picture')
export class Picture {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column()
  public url!: string;

  @ManyToOne(() => User, (user) => user.id)
  public user!: User;

  // @ManyToMany(() => User)
  // public users!: Array<User>;
}
