import { Injectable } from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import { generateHash, validateHash } from './password';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { LoginDTO } from './dto/login.dto';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register(data: RegisterDTO): Promise<User> {
    const { password, ...rest } = data;
    const hashedPassword = await generateHash(password);
    const userData = { ...rest, password: hashedPassword };
    return await this.userService.create(userData);
  }

  async login(data: LoginDTO): Promise<string> {
    const { login, password } = data;
    const user = await this.userService.findByLogin(login);

    if (!user) {
      return null;
    }

    const validPass = await validateHash(password, user.password);
    if (!validPass) {
      return null;
    }
    const token = this.jwtService.sign({ sub: user.id });
    return token;
  }
}
