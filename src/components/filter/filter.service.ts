import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataA, DataB } from './entities';
import { LessThan, Repository } from 'typeorm';
import { FilterOutDatedDto } from './dto/filter-outdated';

@Injectable()
export class FilterService {
  repositories: { dataA: Repository<DataA>; dataB: Repository<DataB> };
  constructor(
    @InjectRepository(DataA) private dataRepositoryA: Repository<DataA>,
    @InjectRepository(DataB) private dataRepositoryB: Repository<DataB>,
  ) {
    this.repositories = {
      dataA: dataRepositoryA,
      dataB: dataRepositoryB,
    };
  }

  async filterOutDatedData({ dateTime, table }: FilterOutDatedDto) {
    await this.repositories[table].delete({
      DateTime: LessThan(dateTime),
    });
    console.log(`Table ${table} was filtered ↓`);
  }

  async fillData() {
    const genRandomData = () => {
      return {
        someData: (Math.random() + 1).toString(36).substring(7),
        DateTime: new Date(Math.floor(Math.random() * Date.now())),
      };
    };

    for (const repository of Object.values(this.repositories)) {
      for (let i = 0; i < 10_000; i++) {
        await repository.save(genRandomData());
      }
    }
  }
}
