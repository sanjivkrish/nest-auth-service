import { Injectable } from '@nestjs/common';

export interface User {
  userId: string;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: '1',
        username: 'sanjiv@blah.com',
        password: 'password',
      },
      {
        userId: '2',
        username: 'demo@blah.com',
        password: 'password2',
      },
    ];
  }

  async findUser(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
