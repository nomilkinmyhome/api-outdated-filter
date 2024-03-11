import { Body, Controller, Get, Post } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterOutDatedDto } from './dto/filter-outdated';

@Controller()
export class FilterController {
  constructor(private filterService: FilterService) {}

  @Get('/fillData')
  async fillData() {
    await this.filterService.fillData();
  }

  @Post('/filter')
  async filterOutDatedData(@Body() filterOutDatedDto: FilterOutDatedDto) {
    await this.filterService.filterOutDatedData(filterOutDatedDto);
  }
}
