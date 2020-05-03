import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStratergy } from './stratergies/local.stratergy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from '../config';
import { JwtStratergy } from './stratergies/jwt.stratergy';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwt.secretKey,
      signOptions: { expiresIn: jwt.expiresIn },
    }),
  ],
  providers: [AuthService, LocalStratergy, JwtStratergy, AuthResolver],
  controllers: [AuthController],
})
export class AuthModule {}
