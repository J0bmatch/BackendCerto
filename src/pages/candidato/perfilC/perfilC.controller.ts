import { Controller, Get, Param, Res } from '@nestjs/common';
import { PerfilCService } from './perfilC.service';

@Controller('cadastro/perfilC')
export class PerfilCController {
  constructor(private readonly perfilCService: PerfilCService) {}

  @Get(':id')
  verPerfil(@Param('id') id: number, @Res() res) {
    const perfil = this.perfilCService.obterPerfilPorId(id);
    return res.json(perfil);
  }
}