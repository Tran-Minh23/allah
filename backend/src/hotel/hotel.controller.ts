import { Controller, Get } from '@nestjs/common';
import { Response } from 'src/common/response';
import { ListService } from './list/list.service';

@Controller('hotel')
export class HotelController {
  constructor(private listService: ListService) {}

  @Get()
  async getHotel(): Promise<Response> {
    const response = await this.listService.getAll();
    return response;
  }
}
