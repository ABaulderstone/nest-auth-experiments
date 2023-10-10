import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: EntityRepository<User>,
  ) {}
  async create(data: CreateUserDto): Promise<User> {
    const newUser = plainToInstance(User, data);
    await this.usersRepository.create(newUser);
    await this.usersRepository.getEntityManager().persistAndFlush(newUser);
    return newUser;
  }

  async findByLogin(login: string): Promise<User> {
    const foundUser = await this.usersRepository.findOne({
      $or: [{ email: login }, { username: login }],
    });
    return foundUser;
  }
}
