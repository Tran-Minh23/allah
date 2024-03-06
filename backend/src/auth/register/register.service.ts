import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from '../dtos/register.dto';
import { randomBytes, scryptSync } from 'crypto';
import { Response } from 'src/common/response';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<any> {
    try {
      const checkUser = await this.usersRepository.findOne({
        where: { username: registerDto.username },
      });

      if (checkUser) {
        throw new HttpException('User existed', HttpStatus.BAD_REQUEST);
      }

      const salt = randomBytes(16).toString('base64');
      const cryptStr = scryptSync(registerDto.password, salt, 64);
      const hashPassword = salt + ':' + cryptStr.toString('base64');

      const user = this.usersRepository.create();

      user.name = registerDto.name;
      user.username = registerDto.username;
      user.password = hashPassword;

      await this.usersRepository.insert(user);

      const response = new Response(201, 'Success', '');

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
