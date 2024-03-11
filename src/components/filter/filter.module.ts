import { FilterService } from './filter.service';
import { FilterController } from './filter.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataA, DataB } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([DataA, DataB])],
  controllers: [FilterController],
  providers: [FilterService],
})
export class FilterModule {}
