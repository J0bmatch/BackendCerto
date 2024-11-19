import { Module } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { VagaController } from './vaga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaga } from '../vaga.entity';
import { Habilidades, Interesses } from 'src/pages/ambos/compartilhado.entity';
import { Empresa } from '../empresa.entity';
import { ConfirmMatch  } from '../../ambos/matching.entity';
import { Candidato } from '../../candidato/candidato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vaga, Habilidades, Interesses, Empresa, ConfirmMatch, Candidato])],
  controllers: [VagaController],
  providers: [VagaService],
})
export class VagaModule {}
