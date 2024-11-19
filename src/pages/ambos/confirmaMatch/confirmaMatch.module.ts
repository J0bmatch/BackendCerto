// src/modules/confirmMatch.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfirmMatch } from '../matching.entity';
import { Vaga } from '../../empresa/vaga.entity';
import { Candidato } from '../../candidato/candidato.entity';
import { ConfirmMatchController } from './confirmMatch.controller';
import { ConfirmMatchService } from './confirmaMatch.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConfirmMatch, Vaga, Candidato])],
  controllers: [ConfirmMatchController],
  providers: [ConfirmMatchService],
})
export class ConfirmMatchModule {}
