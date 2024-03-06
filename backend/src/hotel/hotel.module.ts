import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { ListService } from './list/list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from 'src/database/entities/hotel.entity';

@Module({
  controllers: [HotelController],
  providers: [ListService],
  imports: [TypeOrmModule.forFeature([Hotel])],
})
export class HotelModule {}
