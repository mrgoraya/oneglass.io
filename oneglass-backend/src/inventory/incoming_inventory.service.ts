import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomingInventory } from 'src/entities/incoming_inventory.entity';
import { ForecastService } from 'src/forecast/forecast.service';
import { Repository } from 'typeorm';

@Injectable()
export class IncomingInventoryService {
  constructor(
    @InjectRepository(IncomingInventory)
    private incomingInventoryRepository: Repository<IncomingInventory>,
    private forecastService: ForecastService,
  ) {}

  async findAll(): Promise<IncomingInventory[]> {
    return await this.incomingInventoryRepository.find();
  }

  async findOne(id: number): Promise<IncomingInventory | undefined> {
    return await this.incomingInventoryRepository.findOne({ where: { id } });
  }

  async create(
    incomingInventoryData: IncomingInventory,
  ): Promise<IncomingInventory> {
    return await this.incomingInventoryRepository.save(incomingInventoryData);
  }

  async update(
    id: number,
    incomingInventoryData: IncomingInventory,
  ): Promise<IncomingInventory> {
    await this.incomingInventoryRepository.update(id, incomingInventoryData);
    return this.incomingInventoryRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.incomingInventoryRepository.delete(id);
  }

  async deleteAll(): Promise<void> {
    await this.incomingInventoryRepository.clear();
  }

  async calculateRequiredStock(location: string): Promise<number> {
    // Fetch forecasted sales for the next two weeks
    const forecasts =
      await this.forecastService.findForecastsForNextTwoWeeks(location);
    const forecastedSales = forecasts.reduce(
      (sum, forecast) => sum + forecast.forecastedSales,
      0,
    );

    // Fetch current inventory
    const currentInventory = await this.incomingInventoryRepository.findOne({
      where: { location },
    });
    const totalAvailableStock =
      currentInventory.currentStock + currentInventory.incomingStock;

    // Calculate required stock
    return Math.max(0, forecastedSales - totalAvailableStock);
  }
}
