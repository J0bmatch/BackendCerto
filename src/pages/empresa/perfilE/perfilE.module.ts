import { PerfilE } from './perfilE.interface';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilEService} from './perfilE.service';
import {PerfilEController} from '../perfilE/perfilE.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilE])],
  providers: [PerfilEService],
  controllers: [],
})
export class CadastroEmpresaModule {}