import { Controller, Post, Body, Get, Res, Param, HttpStatus } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { Vaga } from './vaga.entity';

@Controller('vaga')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  @Get(':id/candidatos')
  async listarCandidatos(@Param('id') id: string, @Res() res) {
    const candidatos = await this.vagaService.listarCandidatosPorVaga(id);
    return res.json(candidatos);
  }

  @Get('perfil/:id')
  verPerfil(@Param('id') id: string, @Res() res) {
    return res.redirect(`/cadastro/perfilC/${id}`);
  }

  @Post()
  async criarVaga(@Body() body: any, @Res() res) {
    const vagaCriada = await this.vagaService.criarVaga(body);
    return res.status(HttpStatus.CREATED).json(vagaCriada);
  }

  @Get()
  async findAll(@Res() res) {
    const vagas = await this.vagaService.obterTodas();
    return res.status(HttpStatus.OK).json(vagas);
  }

  @Get('CadastroEmpresa/:CE_id')
  async listarVagaPorEmpresa(@Param('CE_id') CE_id: number, @Res() res) {
    const vagas = await this.vagaService.listarVagaPorEmpresa(CE_id);
    return res.status(HttpStatus.OK).json(vagas);
  }

  @Get('/requisitos')
  navigateToRequisitos(@Res() res) {
    return res.status(HttpStatus.OK).json({
      message: 'Navegando para requisitos',
      nextRoute: '/requisitos',
    });
  }
}

