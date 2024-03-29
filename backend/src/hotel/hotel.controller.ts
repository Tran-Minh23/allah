import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ResponseT } from 'src/common/responseT';
import { ListService } from './list/list.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('hotel')
export class HotelController {
  constructor(private listService: ListService) {}

  @Get()
  async getHotel(): Promise<ResponseT> {
    const response = await this.listService.getAll();
    return response;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getHotelDetail(@Param('id') id: number): Promise<ResponseT> {
    const response = await this.listService.getDetail(id);
    return response;
  }
}
