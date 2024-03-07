import { Module } from '@nestjs/common';
import { LoginService } from './login/login.service';
import { AuthController } from './auth.controller';
import { RegisterService } from './register/register.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserAdmin } from 'src/database/entities/user-admin.entity';

@Module({
  providers: [LoginService, RegisterService],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User, UserAdmin]),
    JwtModule.register({
      secret: 'veryComplexSecret',
      signOptions: { expiresIn: '30 days' },
    }),
  ],
})
export class AuthModule {}
