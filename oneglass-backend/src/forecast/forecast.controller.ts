import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ForecastService } from './forecast.service'; // Import your entity
import { Forecast } from 'src/entities/forecast.entity';

@Controller('forecast')
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  @Get()
  async findAll() {
    return await this.forecastService.findAll();
  }

  @Post()
  async create(@Body() forecastData: Forecast) {
    return await this.forecastService.create(forecastData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() forecastData: Forecast) {
    return await this.forecastService.update(id, forecastData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.forecastService.delete(id);
  }

  @Delete()
  async deleteAll() {
    await this.forecastService.deleteAll();
    return { message: 'All forecasts have been deleted' };
  }

  @Get('nextTwoWeeks/:location')
  async getForecastsForNextTwoWeeks(@Param('location') location: string) {
    return await this.forecastService.findForecastsForNextTwoWeeks(location);
  }
}
