import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MostrarCandidatoService } from './mostrar-candidato.service';
import { MostrarCandidatoController } from './mostrar-candidato.controller';
import { Candidato } from '../candidato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidato])],
  controllers: [MostrarCandidatoController],
  providers: [MostrarCandidatoService],
})
export class MostrarCandidatoModule {}