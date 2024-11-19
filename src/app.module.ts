import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginCModule } from './pages/candidato/loginC/loginC.module';
import { LoginEModule } from './pages/empresa/loginE/loginE.module';
import { VagaModule } from './pages/empresa/vaga/vaga.module'
import { CadastroEmpresaModule } from './pages/empresa/cadastroE/cadastroempresa.module';
import { MatchModule } from './pages/ambos/match/match.module';
import { MostrarCandidatoModule } from './pages/candidato/mostrar-candidato/mostrar-candidato.module';
import { MostrarEmpresaModule } from './pages/empresa/mostrar-empresa/MostrarEmpresaModule';
import { ConfirmMatchModule } from './pages/ambos/confirmaMatch/confirmaMatch.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'minas',
      database: 'jobmatch',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: false,
    }),
    LoginCModule,
    LoginEModule,
    VagaModule,
    CadastroEmpresaModule,
    MatchModule,
    MostrarCandidatoModule,
    MostrarEmpresaModule,
    ConfirmMatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
