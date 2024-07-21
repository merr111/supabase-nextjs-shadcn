import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FirebaseService } from '../firebase/firebase.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly firebaseService: FirebaseService,
  ) {}

  async validateUser(token: string): Promise<any> {
    const user = await this.firebaseService.verifyIdToken(token);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.uid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
