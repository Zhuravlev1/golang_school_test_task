import { Post, Body, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UserRequestDto } from './dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation, ApiCreatedResponse,
} from '@nestjs/swagger';
import { ApiException, ListResponse } from '../shared';
import { ListUserDto } from './dto/list-user.dto';

@ApiBearerAuth()
@ApiTags('user')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  @ApiOperation({ summary: 'Create user profile' })
  @ApiForbiddenResponse({ type: ApiException })
  @ApiNotFoundResponse({ type: ApiException })
  @ApiCreatedResponse({ type: UserDto })
  async create(@Body() userData: UserRequestDto) {
    return this.userService.create(userData);
  }

  @Get()
  @ApiOperation({ summary: 'Get user list' })
  @ApiForbiddenResponse({ type: ApiException })
  @ApiNotFoundResponse({ type: ApiException })
  @ApiCreatedResponse({ type: ListUserDto })
  async findAll(): Promise<ListResponse<UserDto>> {
    return this.userService.findAll();
  }
}
