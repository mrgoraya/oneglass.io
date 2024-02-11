import { Module } from '@nestjs/common';
import { ForecastController } from './forecast.controller';
import { ForecastService } from './forecast.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forecast } from 'src/entities/forecast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Forecast])],
  controllers: [ForecastController],
  providers: [ForecastService],
  exports: [ForecastService],
})
export class ForecastModule {}
