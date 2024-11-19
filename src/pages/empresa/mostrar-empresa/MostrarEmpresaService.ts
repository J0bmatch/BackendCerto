import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../empresa.entity'; // Ajuste o caminho conforme necessário

@Injectable()
export class MostrarEmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  async mostrar(id: number): Promise<Empresa> {
    const empresa = await this.empresaRepository.findOne({
      where: { id },
      relations: ['segmentoAtuacao'],
    });

    if (!empresa) {
      throw new NotFoundException(`Empresa com ID ${id} não encontrada`);
    }

    return empresa;
  }

  async getTop10EmpresasByVagas(): Promise<Empresa[]> {
    // Consulta com Group By e COUNT para buscar as 10 empresas com mais vagas
    return this.empresaRepository
      .createQueryBuilder('empresa')
      .leftJoinAndSelect('empresa.vagas', 'vaga')  // Relaciona com a entidade Vaga
      .groupBy('empresa.id')  // Agrupa por empresa
      .orderBy('COUNT(vaga.id)', 'DESC')  // Ordena pelo número de vagas
      .limit(10)  // Limita o resultado para 10
      .getMany();
  }
}
