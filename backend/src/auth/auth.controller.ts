import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { Response } from 'src/common/response';
import { LoginService } from './login/login.service';
import { LocalAuthGuard } from './local-auth.guard';
import { RegisterDto } from './dtos/register.dto';
import { RegisterService } from './register/register.service';

@Controller('auth')
export class AuthController {
  constructor(
    private loginService: LoginService,
    private registerService: RegisterService,
  ) {}

//   @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<Response> {
    const response = await this.loginService.login(loginDto);

    return response;
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<Response> {
    const response = await this.registerService.register(registerDto);

    return response;
  }
}
