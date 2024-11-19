import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vaga } from '../vaga.entity';
import { Habilidades, Interesses } from 'src/pages/ambos/compartilhado.entity';
import { ConfirmMatch } from '../../ambos/matching.entity'

@Injectable()
export class VagaService {
  constructor(
    @InjectRepository(Vaga)
    private vagaRepository: Repository<Vaga>,

    @InjectRepository(Habilidades)  // Injeção do repositório de Habilidades
    private readonly habilidadesRepository: Repository<Habilidades>,

    @InjectRepository(Interesses)  // Injeção do repositório de Habilidades
    private readonly interessesRepository: Repository<Interesses>,

    @InjectRepository(ConfirmMatch)  // Injeção do repositório de Habilidades
    private readonly confirmMatchRepository: Repository<ConfirmMatch>,
  ) {}

  async findByEmpresaId(empresaId: number): Promise<Vaga[]> {
    return this.vagaRepository.find({
      where: { empresa: { id: empresaId } }, // Usamos o relacionamento com Empresa
      relations: ['empresa', 'habilidades', 'interesses'], // Carrega as relações associadas
    });
  }

   // Método para buscar vaga por ID
   async findById(id: number): Promise<Vaga> {
    const vaga = await this.vagaRepository.findOne({
      where: { id },
      relations: ['empresa', 'habilidades', 'interesses'], // Relacionamentos necessários
    });

    if (!vaga) {
      throw new NotFoundException('Vaga não encontrada.');
    }

    return vaga;
  }

  async createVaga(vagaData: Partial<Vaga>): Promise<Vaga> {
    // Verifica se o campo empresa e empresa.id estão presentes
    if (!vagaData.empresa || !vagaData.empresa.id) {
      throw new Error("O campo 'empresa' com um ID válido é obrigatório.");
    }
    if (vagaData.habilidades) {
      const habilidades = await this.habilidadesRepository.findByIds(vagaData.habilidades);
      vagaData.habilidades = habilidades;
    }
  
    // Atualizando interesses
    if (vagaData.interesses) {
      const interesses = await this.interessesRepository.findByIds(vagaData.interesses);
      vagaData.interesses = interesses;
    }
    const novaVaga = this.vagaRepository.create({
      descricao: vagaData.descricao,
      exigencias: vagaData.exigencias,
      funcao: vagaData.funcao,
      salario: vagaData.salario,
      riscos: vagaData.riscos,
      googleForm: vagaData.googleForm,
      empresa: { id: vagaData.empresa.id },
      habilidades: vagaData.habilidades,
      interesses: vagaData.interesses
    });
    
    return this.vagaRepository.save(novaVaga);
  }
  
  

  async deleteVaga(id: number): Promise<void> {
    const vaga = await this.vagaRepository.findOne({ where: { id } });
    if (!vaga) {
      throw new NotFoundException('Vaga não encontrada.');
    }
    await this.vagaRepository.remove(vaga);
  }

//jkjkjkjkj
async findAllCandidatesByVaga(vagaId: number): Promise<ConfirmMatch[]> {
  return this.confirmMatchRepository.find({
    where: { vaga: { id: vagaId } },
    relations: ['candidato'], 
  });
}

  }