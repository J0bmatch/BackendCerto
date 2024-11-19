import { Controller, Get, Param } from '@nestjs/common';
import { MostrarCandidatoService } from './mostrar-candidato.service';

@Controller('mostrar-candidato')
export class MostrarCandidatoController {
  constructor(private readonly mostrarCandidatoService: MostrarCandidatoService) {}

  @Get(':id')
  async mostrar(@Param('id') id: number) {
    return await this.mostrarCandidatoService.mostrar(id);
  }
}
