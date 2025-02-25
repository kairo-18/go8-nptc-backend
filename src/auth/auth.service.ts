import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const passwordValid = await bcrypt.compare(password, user.Password);
    if (!passwordValid) throw new UnauthorizedException('Invalid credentials');

    const { Password, ...result } = user;
    return result;
}


async login(user: any) {
    if (!user) {
        throw new UnauthorizedException('Invalid user data');
    }

    let username = user.nptcAdmin?.username || 
                   user.vrAdmin?.username || 
                   user.operatorAdmin?.username || 
                   user.driver?.username;

    if (!username) {
        throw new UnauthorizedException('Invalid user data');
    }

    const payload = { sub: user.id, username, role: user.role };

    return {
        access_token: this.jwtService.sign(payload, { expiresIn: '15m' }),
        refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
        user: { user },
    };
}

  
}
