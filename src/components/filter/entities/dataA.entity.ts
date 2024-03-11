import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DataA {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  someData: string;

  @Column({ type: 'date' })
  DateTime: Date;
}
