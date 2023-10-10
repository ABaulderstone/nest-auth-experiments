import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { User } from 'src/users/entities/user.entity';
import { LoginDTO } from './dto/login.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() data: RegisterDTO): Promise<User> {
    return await this.authService.register(data);
  }

  @Post('/login')
  async login(@Body() data: LoginDTO): Promise<User> {
    const user = await this.authService.login(data);
    if (!user) {
      throw new BadRequestException('Incorrect login or password');
    }
    return user;
  }
}
