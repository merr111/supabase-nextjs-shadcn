import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

//   @Get('facebook')
//   @UseGuards(AuthGuard('facebook'))
//   async facebookAuth(@Req() req) {}

//   @Get('facebook/callback')
//   @UseGuards(AuthGuard('facebook'))
//   async facebookAuthRedirect(@Req() req) {
//     return this.authService.login(req.user);
//   }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    return this.authService.login(req.user);
  }
}
