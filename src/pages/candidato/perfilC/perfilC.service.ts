import { Injectable, NotFoundException } from '@nestjs/common';
import { VagaService } from '../../empresa/vaga/vaga.service'; // Importa o serviço de vagas para acessar os dados
import {Perfil} from './perfil.interface';


@Injectable()
export class PerfilCService {
    private perfis : Perfil []=[];

     // Método para obter o perfil por ID
  obterPerfilPorId(id: number): Perfil {
    const perfil = this.perfis.find(perfil => perfil.id === id);

    if (!perfil) {
      throw new NotFoundException(`Perfil com ID ${id} não encontrado.`);
    }

    return perfil;
  }
  constructor(private readonly vagaService: VagaService) {}
  

  // Método para obter o perfil com base na vaga
  getPerfilByVagaId(vagaId: number) {
    const vaga = this.vagaService.getVagaById(vagaId);

    // Retorna o perfil do candidato baseado nas informações da vaga
    return {
      id: vaga.VE_id, 
      nome: vaga.titulo || 'titulo não informado',
    };
  }
}
