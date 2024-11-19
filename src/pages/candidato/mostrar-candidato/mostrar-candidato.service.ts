import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidato } from '../candidato.entity';

@Injectable()
export class MostrarCandidatoService {
  constructor(
    @InjectRepository(Candidato)
    private candidatoRepository: Repository<Candidato>,
  ) {}

  async mostrar(id: number): Promise<Candidato> {
    const candidato = await this.candidatoRepository.findOne({
      where: { id },
      relations: ['habilidades', 'interesses'],
    });

    if (!candidato) {
      throw new NotFoundException(`Candidato com ID ${id} não encontrado`);
    }

    return candidato;
  }
}