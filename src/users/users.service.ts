import { Injectable } from '@nestjs/common';
import { User } from './models/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'sanjiv',
        password: 'password',
        email: 'sanjiv@blah.com',
      },
      {
        id: 2,
        username: 'demo@blah.com',
        password: 'password2',
        email: 'sanjiv1@blah.com',
      },
    ];
  }

  async findUser(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async createUser(user: User): Promise<User | undefined> {
    await this.users.push(user);

    return user;
  }
}
