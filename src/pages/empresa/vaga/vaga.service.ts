import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vaga } from './vaga.entity';

@Injectable()
export class VagaService {
  constructor(
    @InjectRepository(Vaga)
    private readonly vagaRepository: Repository<Vaga>, // Repositório de Vagas
  ) {}

  // Método para criar uma vaga
  async criarVaga(vagaData: any): Promise<Vaga> {
    const vaga = this.vagaRepository.create({
      titulo: vagaData.titulo,
      VE_exigencias: vagaData.VE_exigencias,
      VE_descricao: vagaData.VE_descricao,
      habilidadesInterpessoais: vagaData.habilidadesInterpessoais || [],
      habilidadesPessoais: vagaData.habilidadesPessoais || [],
      habilidadesCognitivas: vagaData.habilidadesCognitivas || []
    });

    // Salva a vaga no banco de dados
    return await this.vagaRepository.save(vaga);
  }

  // Método para deletar uma vaga pelo ID
  async deletarVaga(id: number): Promise<void> {
    const result = await this.vagaRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Vaga com ID ${id} não foi encontrada`);
    }
  }

  // Método para obter todas as vagas
  async obterTodas(): Promise<Vaga[]> {
    return await this.vagaRepository.find();
  }

  // Método para listar vagas de uma empresa específica
  async listarVagaPorEmpresa(CE_id: number): Promise<Vaga[]> {
    return await this.vagaRepository.find({
      where: { CE_id }, // Filtra por CE_id (id da empresa)
    });
  }

  // Método para listar candidatos por vaga
  async listarCandidatosPorVaga(vagaId: string): Promise<Vaga> {
    const vaga = await this.vagaRepository.findOne({
      where: { VE_id: Number(vagaId) },
    });

    if (!vaga) {
      throw new NotFoundException(`Vaga com ID ${vagaId} não foi encontrada.`);
    }

    return vaga;
  }

  // Método para buscar uma vaga por ID
  async getVagaById(id: number): Promise<Vaga> {
    const vaga = await this.vagaRepository.findOne({ where: { VE_id: id } });

    if (!vaga) {
      throw new NotFoundException(`Vaga com ID ${id} não foi encontrada.`);
    }

    return vaga;
  }
}
