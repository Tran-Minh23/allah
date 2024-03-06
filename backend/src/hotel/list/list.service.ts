import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'src/common/response';
import { Hotel } from 'src/database/entities/hotel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
  ) {}

  async getAll(): Promise<Response> {
    const listHotel: Hotel[] = await this.hotelRepository.find();

    const response = new Response(200, 'Success', listHotel);
    return response;
  }
}
