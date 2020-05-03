import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { LoginResponse } from './dto/login.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    const user = await this.authService.validateUser(username, password);

    if (!user) return new UnauthorizedException();

    return await this.authService.login(user);
  }
}
