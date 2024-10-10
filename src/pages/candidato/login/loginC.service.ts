// src/pages/candidato/candidato.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidato } from '../candidato.entity';

@Injectable()
export class LoginCService {
  constructor(
    @InjectRepository(Candidato)
    private readonly candidatoRepository: Repository<Candidato>,
  ) {}

  async createCandidato(rm: string, dataNascimento: string): Promise<Candidato> {
    const candidato = new Candidato();
    candidato.rm = rm;
    candidato.dataNascimento = dataNascimento;
    return this.candidatoRepository.save(candidato);
  }

  async login(rm: string, dataNascimento: string): Promise<{ isFirstAccess: boolean }> {
    let candidato = await this.candidatoRepository.findOne({ where: { rm, dataNascimento } });

    if (!candidato) {
      candidato = await this.createCandidato(rm, dataNascimento);
    }

    const isFirstAccess = !candidato.experiencia;

    return { isFirstAccess };
  }
}