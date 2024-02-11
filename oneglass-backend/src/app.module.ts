import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForecastModule } from './forecast/forecast.module';
import { IncomingInventoryModule } from './inventory/incoming_inventory.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'voids-jobs.c2wwnfcaisej.eu-central-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres_ro',
      password: 'voidsiscool',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, // set to false in production
    }),
    ForecastModule,
    IncomingInventoryModule,
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
