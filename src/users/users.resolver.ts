import { Resolver, Args, Query } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User, { name: 'user' })
  @UseGuards(GqlAuthGuard)
  async getUser(@Args('username') username: string) {
    return await this.usersService.findUser(username);
  }
}
