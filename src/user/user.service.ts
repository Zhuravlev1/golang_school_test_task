import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseCrudService } from '../shared/services/base-crud.service';
import { ListResponse } from '../shared';

@Injectable()
export class UserService extends BaseCrudService<UserEntity, UserDto, CreateUserDto, UpdateUserDto> {
  constructor(
    @InjectRepository(UserEntity)
    protected readonly repository: Repository<UserEntity>,
  ) {
    super();
  }

  async create(dto: CreateUserDto): Promise<UserDto> {
    const user = await this.repository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: dto.email })
      .getOne();

    if (user) {
      throw new HttpException({ message: 'Email must be unique.' }, HttpStatus.BAD_REQUEST);
    }

    const userEntity = await this.createEntity(dto);
    const savedUser = await this.repository.save(userEntity);
    return this.buildDto(savedUser);
  }

  async findAll(): Promise<ListResponse<UserDto>> {
    const [users, count] = await this.repository.findAndCount();
    const items = users ? users.map(this.buildDto) : [];

    return { items, count };
  }

  protected buildDto(user: UserEntity): UserDto {
    return { ...user };
  }

  protected async createEntity(inputData: CreateUserDto): Promise<UserEntity> {
    const userEntity = new UserEntity();
    return Object.assign(userEntity, inputData);
  }
}
