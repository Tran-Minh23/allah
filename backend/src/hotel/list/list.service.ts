import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseT } from 'src/common/responseT';
import { Hotel } from 'src/database/entities/hotel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
  ) {}

  async getAll(): Promise<ResponseT> {
    const listHotel: Hotel[] = await this.hotelRepository.find({
      select: ['hotel_id', 'bg_image', 'name'],
    });

    const response = new ResponseT(200, 'Success', listHotel);
    return response;
  }

  async getDetail(id: number): Promise<ResponseT> {
    const hotel: Hotel = await this.hotelRepository.findOne({
      where: { hotel_id: id },
      select: ['hotel_id', 'name', 'address', 'images', 'rooms'],
      relations: {
        rooms: true,
      },
    });

    // const rooms = await this.hotelRepository.createQueryBuilder().i;

    const response = new ResponseT(200, 'Success', hotel);
    return response;
  }
}
