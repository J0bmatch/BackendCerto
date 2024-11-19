import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from '../empresa.entity'; // Ajuste o caminho se necessário
import { LoginEController } from './loginE.controller';
import { LoginEService } from './loginE.service';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])], // Importa a entidade Empresa
  controllers: [LoginEController],
  providers: [LoginEService],
})
export class LoginEModule {}
