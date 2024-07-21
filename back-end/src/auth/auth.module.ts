import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { FirebaseModule } from '../firebase/firebase.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'eW1P1Dp6B2lZ4QfwOQd8h8EnU7aX2FZ0HV9rtkU4QmA=',
      signOptions: { expiresIn: '60m' },
    }),
    FirebaseModule,
  ],
  controllers: [AuthController], 
  providers: [AuthService, FacebookStrategy, GoogleStrategy],
  exports: [AuthService],
})
export class AuthModule {}
