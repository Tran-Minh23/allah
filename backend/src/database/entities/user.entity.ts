import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ nullable: false, length: 50 })
  username: string;

  @Column({ nullable: false, length: 100 })
  password: string;

  @Column({ nullable: false, length: 100 })
  name: string;
}
