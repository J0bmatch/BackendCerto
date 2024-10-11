import { GerenciarVagaController } from './gerencia.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaga } from '../vaga/vaga.entity'; // Caminho correto para o arquivo onde a interface Vaga está exportada
import { VagaService } from '../vaga/vaga.service';
import { VagaController } from '../vaga/vaga.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vaga])],
  providers: [VagaService],
  controllers: [VagaController],

})
export class GerenciaModule{}
