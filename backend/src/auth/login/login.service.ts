import { Injectable } from '@nestjs/common';
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
    const res = { code: 200, message: [], data: null };
    // const salt = randomBytes(16).toString('base64');

    const user = await this.usersRepository.findOne({
      where: { username: loginDto.username },
    });

    if (user) {
      const [salt, hash] = user.password.split(':');
      const cryptStr = scryptSync(loginDto.password, salt, 64);

      if (cryptStr.toString('base64') === hash) {
        const payload = { username: user.username, sub: user.user_id };
        const token = this.jwtService.sign(payload);

        res.data = token;
      }
    } else {
      res.code = 400;
      res.message.push('User not found');
    }

    const response = new Response(res.code, res.message, res.data);
    return response;
  }
}
