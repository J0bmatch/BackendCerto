import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MostrarEmpresaService } from './MostrarEmpresaService';

@Controller('mostrar-empresa')
export class MostrarEmpresaController {
  constructor(private readonly mostrarEmpresaService: MostrarEmpresaService) {}

  @Get('/top')
  async getTop10Empresas() {
    return await this.mostrarEmpresaService.getTop10EmpresasByVagas();
  }
  @Get('/:id')
  async mostrar(@Param('id', ParseIntPipe) id: number) {
    return await this.mostrarEmpresaService.mostrar(id);
  }

}
