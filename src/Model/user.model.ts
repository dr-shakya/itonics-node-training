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

  // @OneToOne(() => Picture)
  // @JoinColumn()
  // public picture!: Picture; // pictureId

  // @OneToMany(() => Picture, (picture) => picture.id)
  // public picture!: Array<Picture>; // pictureId
}
