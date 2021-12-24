import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { Type } from 'class-transformer';

export class ListUserDto {
  @ApiProperty()
  readonly count: number;

  @ApiProperty({ type: [UserDto] })
  @Type(() => UserDto)
  readonly items: UserDto[];
}
