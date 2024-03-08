import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { ResponseT } from 'src/common/responseT';
import { LoginService } from './login/login.service';
import { LocalAuthGuard } from './local-auth.guard';
import { RegisterDto } from './dtos/register.dto';
import { RegisterService } from './register/register.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private loginService: LoginService,
    private registerService: RegisterService,
  ) {}

  //   @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<ResponseT> {
    const response: ResponseT = await this.loginService.login(loginDto);

    return response;
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<ResponseT> {
    const response = await this.registerService.register(registerDto);

    return response;
  }
}
