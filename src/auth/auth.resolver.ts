import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UnauthorizedException, ValidationPipe } from '@nestjs/common';
import { LoginResponse } from './dto/login.dto';
import { SignupArgs } from './dto/signup.args';
import { User } from 'src/users/models/user.model';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => User)
  async signup(@Args(ValidationPipe) args: SignupArgs) {
    return await this.authService.signup(args);
  }

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
