/*import { Controller, Post, Body } from '@nestjs/common';
import { PerfilE } from './perfilE.interface';
import { Perfilem } from './perfilE.entity';
import { CadastroEmpresa } from '../cadastro/cadastroempresa.entity';
import { CadastroEmpresaService } from '../cadastro/cadastroempresa.service';
import { PerfilEService } from './perfilE.service';

@Controller('perfil-empresa')//postman ve
export class PerfilEController {
  constructor(private readonly PerfilEservice: PerfilEService) {}

  @Post()
  async create(@Body() createDto: PerfilE): Promise<Perfil> {
    return this.cadastroEmpresaService.create(createDto);
  }
}*/
