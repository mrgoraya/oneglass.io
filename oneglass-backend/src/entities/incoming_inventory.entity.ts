import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('incoming_inventory')
export class IncomingInventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  productName: string;

  @Column({ nullable: true })
  location: string;

  @Column('date', { nullable: true })
  date: string;

  @Column('int', { nullable: true })
  currentStock: number;

  @Column('int', { nullable: true })
  incomingStock: number;

  @Column('int', { nullable: true })
  quantity: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
