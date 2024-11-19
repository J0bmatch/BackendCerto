import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidato } from '../../candidato/candidato.entity';

@Injectable()
export class CandidatoService {
  constructor(
    @InjectRepository(Candidato)
    private readonly candidatoRepository: Repository<Candidato>,
  ) {}

  // Busca um candidato pelo ID
  async findCandidatoById(id: number): Promise<Candidato | undefined> {
    return this.candidatoRepository.findOne({ where: { id } });
  }

  // Retorna todos os candidatos
  async getAllCandidatos(): Promise<Candidato[]> {
    return this.candidatoRepository.find();
  }
}
