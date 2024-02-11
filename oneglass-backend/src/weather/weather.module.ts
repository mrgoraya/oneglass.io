import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [WeatherService],
  exports: [WeatherService], // Export if you want to use it in other modules
})
export class WeatherModule {}
