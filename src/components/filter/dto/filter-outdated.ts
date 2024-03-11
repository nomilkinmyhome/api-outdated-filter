import { Type } from 'class-transformer';
import { IsDate, IsIn, IsString } from 'class-validator';
import { tableName, tableNames } from '../types';

export class FilterOutDatedDto {
  @Type(() => Date)
  @IsDate()
  dateTime: Date;

  @IsString()
  @IsIn(tableNames)
  table: tableName;
}
