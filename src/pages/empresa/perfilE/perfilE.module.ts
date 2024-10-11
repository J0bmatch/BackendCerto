import { PerfilE } from './perfilE.interface';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilEService} from './perfilE.service';
import {PerfilEController} from './perfilE.controller';
import { PerfilEmp } from './perfilE.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilEmp])],
  providers: [PerfilEService],
  controllers: [PerfilEController],
})
export class PerfilEModule {}