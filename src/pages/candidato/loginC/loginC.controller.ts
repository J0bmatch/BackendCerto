import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { LoginCService } from './loginC.service';
import { Candidato } from '../candidato.entity';

@Controller('login')
export class LoginCController {
  constructor(private readonly loginCService: LoginCService) {}

  // Rota para verificar login
  @Post('verificar')
  async verificarLogin(
    @Body('rm') rm: string,
    @Body('dataNascimento') dataNascimento: string,
  ) {
    return this.loginCService.verificarLogin(rm, dataNascimento);
  }

  // Rota para atualizar cadastro do candidato
  @Post('atualizar/:rm')
  async atualizarCadastro(
    @Param('rm') rm: string,
    @Body() dados: Partial<Candidato>,
  ) {
    return this.loginCService.atualizarCadastro(rm, dados);
  }


 @Get('candidato/:rm')
  async buscarCandidato(@Param('rm') rm: string) {
    console.log('Buscando candidato com RM:', rm);
    const candidato = await this.loginCService.buscarCandidatoPorRm(rm);
    
    if (!candidato) {
      throw new NotFoundException('Candidato não encontrado');
    }

    // Retorna o candidato encontrado com suas habilidades e interesses
    return candidato;
  }
}