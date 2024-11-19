import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MostrarEmpresaService } from './MostrarEmpresaService';
import { MostrarEmpresaController } from './MostrarEmpresaController';
import { Empresa } from '../empresa.entity';
import { SegmentoAtuacao } from '../segmentoAtuacao.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Empresa, SegmentoAtuacao])], 
  controllers: [MostrarEmpresaController],
  providers: [MostrarEmpresaService],
})
export class MostrarEmpresaModule {}
