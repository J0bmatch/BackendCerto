import { Controller, Post, Body } from '@nestjs/common';
import { EmpresaService } from './cadastroempresa.service';
import { Empresa } from '../Empresa.entity'

@Controller('cadastro-empresa')//postman ve
export class EmpresaController {
  constructor(private readonly EmpresaService: EmpresaService) {}

  @Post()
  async create(@Body() createDto: Empresa): Promise<Empresa> {
    return this.EmpresaService.create(createDto);
  }
}
