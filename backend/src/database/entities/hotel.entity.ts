import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { HotelRoom } from './hotel-room.entity';

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

  @OneToMany(() => HotelRoom, (room) => room.hotel)
  rooms: HotelRoom[];
}
