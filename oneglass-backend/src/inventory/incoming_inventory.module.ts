import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomingInventoryController } from './incoming_inventory.controller';
import { IncomingInventoryService } from './incoming_inventory.service';
import { IncomingInventory } from 'src/entities/incoming_inventory.entity';
import { ForecastModule } from 'src/forecast/forecast.module';

@Module({
  imports: [TypeOrmModule.forFeature([IncomingInventory]), ForecastModule],
  controllers: [IncomingInventoryController],
  providers: [IncomingInventoryService],
  exports: [IncomingInventoryService],
})
export class IncomingInventoryModule {}
