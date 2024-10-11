import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from '../empresa.entity';
import { EmpresaService } from './cadastroempresa.service';
import { EmpresaController } from './cadastroempresa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  providers: [EmpresaService],
  controllers: [EmpresaController],
})
export class CadastroEmpresaModule {}
