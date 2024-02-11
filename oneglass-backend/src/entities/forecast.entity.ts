import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('forecasts')
export class Forecast {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  location: string;

  @Column('date', { nullable: true })
  date: Date;

  @Column('int', { name: 'forecasted_sales', nullable: true })
  forecastedSales: number | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
