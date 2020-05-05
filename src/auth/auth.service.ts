import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findUser(username);

    if (user?.password === password) return user;

    return null;
  }

  async signup(newUser: User) {
    return await this.userService.createUser(newUser);
  }

  login({ id }: User) {
    const payLoad = { id };

    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payLoad),
    };
  }
}
