import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ResponseT } from 'src/common/responseT';
import { LoginDto } from '../dtos/login.dto';
import { User } from 'src/database/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { scryptSync } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { UserAdmin } from 'src/database/entities/user-admin.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserAdmin)
    private userAdminRepository: Repository<UserAdmin>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<ResponseT> {
    let token: string;

    const user = await this.usersRepository.findOne({
      where: { username: loginDto.username },
    });
    const user_role = await this.getAdmin(user.user_id);

    if (!user) {
      throw new HttpException('Invalid username', HttpStatus.BAD_REQUEST);
    }

    const [salt, hash] = user.password.split(':');
    const cryptStr = scryptSync(loginDto.password, salt, 64);

    if (cryptStr.toString('base64') === hash) {
      const payload = {
        username: user.username,
        sub: user.user_id,
        role: user_role,
      };
      token = this.jwtService.sign(payload);
    } else {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }

    const response = new ResponseT(200, 'Success', token);
    return response;
  }

  private async getAdmin(userId: string): Promise<object> {
    let result = {};

    const admin = await this.userAdminRepository.find({
      where: { user_id: userId },
    });

    if (admin.length > 0) {
      result = admin.reduce((a, v) => ({ ...a, [v.hotel_id]: v.role }), {});
    }

    return result;
  }
}
