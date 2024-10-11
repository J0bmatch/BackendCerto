import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vaga } from './vaga.entity';
import { PerfilCService } from 'src/pages/candidato/perfilC/perfilC.service';
import { CadastroEmpresa } from '../cadastro/cadastroempresa.entity';

@Injectable()
export class VagaService {
  private vaga: Vaga[] = [];

  async criarVaga(vaga: any){
    const novaVaga= {
      id: this.vaga.length +1,
      titulo: vaga.titulo,
      VE_exigencias: vaga.VE_exigencias,
      VE_descricao: vaga.VE_descricao,
      habilidadesInterpessoais: vaga.habilidadesInterpessoais ||[],
      habilidadesPessoais: vaga.habilidadesPessoais ||[],
      habilidadesCognitivas: vaga.habilidadesCognitivas || []
    }
  }
  
  async deletarVaga(id: number): Promise<void> {
    const result = await this.vagaRepository.delete(id); // Excluindo a vaga pelo ID

    if (result.affected === 0) {
      throw new NotFoundException(`Vaga com ID ${id} não foi encontrada`);
    }
  }

  async obterTodas(): Promise<Vaga[]> {
    return await this.vagaRepository.find(); // Busca todas as vagas no banco de dados
  }

  listarCandidatosPorVaga(vagaId: string) {
    const vaga = this.vaga.find(v => v.VE_id === Number(vagaId));
    return vaga;
  }
  constructor(
    @InjectRepository(Vaga)
    private vagaRepository: Repository<Vaga>,
  ) {}

  async create(descricao: string, exigencias: string): Promise<Vaga> {
    const vaga = this.vagaRepository.create({
      VE_descricao: descricao,
      VE_exigencias: exigencias,
    });
    return this.vagaRepository.save(vaga);
  }
    async findAll(): Promise<Vaga[]> {
      return this.vaga; // Retorna a lista de vagas
    }
  async listarVagaPorEmpresa(id:number): Promise<Vaga[]>{
    return this.vagaRepository.find({
      where: {
       //CE_id: {CE_id},
       }});
  }
  getVagaById(id: number): Vaga {
    const vaga = this.vaga.find(vaga => vaga.VE_id === id);

    if (!vaga) {
      throw new NotFoundException(`Vaga com ID ${id} não encontrada.`);
    }

    return vaga;
  }
}
