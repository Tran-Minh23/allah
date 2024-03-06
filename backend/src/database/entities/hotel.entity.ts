import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'hotel' })
export class Hotel {
  @PrimaryGeneratedColumn('increment')
  hotel_id: number;

  @Column({ nullable: false, length: 100 })
  address: string;

  @Column({ nullable: false, length: 100 })
  name: string;

  @Column()
  bg_image: string;

  @Column()
  images: string;
}
