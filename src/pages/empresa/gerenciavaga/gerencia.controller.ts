import { Controller, Delete, Param, Get } from '@nestjs/common';
import { VagaService } from '../vaga/vaga.service';
import { Vaga } from './gerencia.entity';

@Controller('gerenciar-vaga')
export class GerenciarVagaController {
  constructor(private readonly vagaService: VagaService) {}

  @Get()
  async listarVagas() {
    return this.vagaService.obterTodas();
  }

  @Delete(':id')
  async deletarVaga(@Param('id') id:number) {
    return this.vagaService.deletarVaga(id);
  }
}
