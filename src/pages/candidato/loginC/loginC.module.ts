import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginCService } from './loginC.service';
import { LoginCController } from './loginC.controller';
import { Candidato } from '../candidato.entity';
import { Endereco, Habilidades, Interesses} from '../../ambos/compartilhado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidato, Habilidades, Interesses, Endereco])],
  controllers: [LoginCController],
  providers: [LoginCService],
})
export class LoginCModule {}
