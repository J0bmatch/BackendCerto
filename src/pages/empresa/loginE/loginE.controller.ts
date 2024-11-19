import { Controller, Post, Body } from '@nestjs/common';
import { LoginEService } from './loginE.service';

@Controller('login/empresa')
export class LoginEController {
  constructor(private readonly loginEService: LoginEService) {}

  @Post()
  async login(@Body() loginData: { email: string; senha: string }) {
    return this.loginEService.login(loginData.email, loginData.senha);
  }
}
