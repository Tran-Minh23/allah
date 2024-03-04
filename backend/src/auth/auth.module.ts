import { Module } from '@nestjs/common';
import { LoginService } from './login/login.service';
import { AuthController } from './auth.controller';
import { RegisterService } from './register/register.service';

@Module({
  providers: [LoginService, RegisterService],
  controllers: [AuthController],
})
export class AuthModule {}
