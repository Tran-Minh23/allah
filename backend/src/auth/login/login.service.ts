import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'src/common/response';
import { LoginDto } from '../dtos/login.dto';
import { User } from 'src/database/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { scryptSync, randomBytes } from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<Response> {
    let token: string;
    const user = await this.usersRepository.findOne({
      where: { username: loginDto.username },
    });

    if (!user) {
      throw new HttpException('Invalid username', HttpStatus.BAD_REQUEST);
    }

    const [salt, hash] = user.password.split(':');
    const cryptStr = scryptSync(loginDto.password, salt, 64);

    if (cryptStr.toString('base64') === hash) {
      const payload = { username: user.username, sub: user.user_id };
      token = this.jwtService.sign(payload);
    } else {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }

    const response = new Response(200, 'Success', token);
    return response;
  }
}
