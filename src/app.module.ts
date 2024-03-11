import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilterModule } from './components/filter/filter.module';
import config from './ormconfig';

@Module({
  imports: [FilterModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
