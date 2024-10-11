import { Controller, Post, Body, Get, Res, Param, HttpStatus } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { Vaga } from './vaga.entity';

@Controller('vaga')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  @Get(':id/candidatos')
  listarCandidatos(@Param('id') id: string, @Res() res) {
    const candidatos = this.vagaService.listarCandidatosPorVaga(id);
    return res.json(candidatos);
  }

  @Get('perfil/:id')
  verPerfil(@Param('id') id: string, @Res() res) {
    return res.redirect(`/cadastro/perfilC/${id}`);
  }

  @Post()
  async criarVaga(@Body() body: any) {
    const { titulo, habilidadesInterpessoais,habilidadesCognitivas, habilidadesPessoais,VE_descricao, VE_exigencias} = body;

    return this.vagaService.criarVaga({
      titulo,
      VE_descricao, 
      VE_exigencias,
      habilidadesInterpessoais: habilidadesInterpessoais || [],
      habilidadesCognitivas: habilidadesCognitivas || [],
      habilidadesPessoais: habilidadesPessoais || [],
    }); // Certifique-se de que o método create espera esses parâmetros
  }

  @Get()
  findAll() {
    return this.vagaService.findAll();
  }

  @Get('CadastroEmpresa/:CE_id')
  listarVagaPorEmpresa(@Param('CE_id')CE_id: number){
    return this.vagaService.listarVagaPorEmpresa(CE_id);
  }
  // Navegação para os requisitos de uma vaga específica
  @Get('/requisitos')
  navigateToRequisitos() {
    return {
      message: 'Navegando para requisitos',
      nextRoute: '/requisitos',
    };
  }
}
