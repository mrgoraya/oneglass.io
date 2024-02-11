import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { IncomingInventoryService } from './incoming_inventory.service';
import { IncomingInventory } from 'src/entities/incoming_inventory.entity';

@Controller('incoming-inventory')
export class IncomingInventoryController {
  constructor(
    private readonly incomingInventoryService: IncomingInventoryService,
  ) {}

  @Get()
  async findAll() {
    return await this.incomingInventoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.incomingInventoryService.findOne(id);
  }

  @Post()
  async create(@Body() incomingInventoryData: IncomingInventory) {
    return await this.incomingInventoryService.create(incomingInventoryData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() incomingInventoryData: IncomingInventory,
  ) {
    return await this.incomingInventoryService.update(
      id,
      incomingInventoryData,
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.incomingInventoryService.delete(id);
  }

  @Delete()
  async deleteAll() {
    await this.incomingInventoryService.deleteAll();
    return { message: 'All forecasts have been deleted' };
  }

  @Get('requiredStock/:location')
  async getRequiredStock(@Param('location') location: string) {
    return await this.incomingInventoryService.calculateRequiredStock(location);
  }
}
