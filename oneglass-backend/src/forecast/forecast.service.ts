import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Forecast } from 'src/entities/forecast.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class ForecastService {
  constructor(
    @InjectRepository(Forecast)
    private forecastRepository: Repository<Forecast>,
  ) {}

  async findAll(): Promise<Forecast[]> {
    return await this.forecastRepository.find();
  }

  async create(forecastData: Forecast): Promise<Forecast> {
    return await this.forecastRepository.save(forecastData);
  }

  async update(id: number, forecastData: Forecast): Promise<Forecast> {
    await this.forecastRepository.update(id, forecastData);
    return this.forecastRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.forecastRepository.delete(id);
  }

  async deleteAll(): Promise<void> {
    await this.forecastRepository.clear();
  }

  async findForecastsForNextTwoWeeks(location: string): Promise<Forecast[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 14);
    twoWeeksLater.setHours(23, 59, 59, 999);

    return await this.forecastRepository.find({
      where: {
        location,
        date: Between(today, twoWeeksLater),
      },
    });
  }
}
