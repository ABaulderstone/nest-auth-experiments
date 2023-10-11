import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JWTGuard } from './auth/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/restricted')
  @UseGuards(JWTGuard)
  getRestricted() {
    return 'You can access';
  }
}
