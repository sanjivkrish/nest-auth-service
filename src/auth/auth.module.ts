import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStratergy } from './stratergies/local.stratergy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from '../config';
import { JwtStratergy } from './stratergies/jwt.stratergy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwt.secretKey,
      signOptions: { expiresIn: jwt.expiresIn },
    }),
  ],
  providers: [AuthService, LocalStratergy, JwtStratergy],
  controllers: [AuthController],
})
export class AuthModule {}
