import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DataB {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  someData: string;

  @Column({ type: 'date' })
  DateTime: Date;
}
