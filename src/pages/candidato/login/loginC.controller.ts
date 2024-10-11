import { Controller, Post, Body } from '@nestjs/common';
import { LoginCService } from './loginC.service';

@Controller('candidato/login')
export class LoginCController {
  constructor(private readonly candidatoService: LoginCService) {}

  @Post()
  async login(@Body() credentials: { rm: string; dataNascimento: string }): Promise<{ isFirstAccess?: boolean; message?: string }> {
    return this.candidatoService.login(credentials.rm, credentials.dataNascimento);
  }
}
