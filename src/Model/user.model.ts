import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column()
  public firstName!: string;

  @Column()
  public lastName!: string;

  @Column()
  public age!: number;
}
