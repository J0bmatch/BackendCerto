/*import { Controller, Delete, Param, Get } from '@nestjs/common';
import { VagaService } from '../vaga/vaga.service';
import { Vaga } from '../vaga.entity';

@Controller('gerenciar-vaga')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  //rota para listar vagas
  @Get()
  async listarVagas() {
    return this.vagaService.listarVagas();
  }

  //rota para deletar vaga
  @Delete(':id')
  async deletarVaga(@Param('id') id:number) {
    return this.vagaService.deletarVaga(id);
  }
}
*/