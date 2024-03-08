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
    const listHotel: Hotel[] = await this.hotelRepository.find();

    const response = new ResponseT(200, 'Success', listHotel);
    return response;
  }
}
