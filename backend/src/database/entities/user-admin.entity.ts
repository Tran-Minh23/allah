import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_admin' })
export class UserAdmin {
  @PrimaryGeneratedColumn('increment')
  admin_id: number;

  @Column({ nullable: false, length: 36 })
  user_id: string;

  @Column({ nullable: false })
  hotel_id: number;

  @Column({ nullable: false, length: 10 })
  role: string;
}
