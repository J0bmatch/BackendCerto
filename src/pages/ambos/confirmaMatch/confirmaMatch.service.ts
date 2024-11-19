// src/services/confirmMatch.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfirmMatch } from '../matching.entity';
import { Vaga } from '../../empresa/vaga.entity';
import { Candidato } from '../../candidato/candidato.entity';

@Injectable()
export class ConfirmMatchService {
  constructor(
    @InjectRepository(ConfirmMatch)
    private confirmMatchRepository: Repository<ConfirmMatch>,
    @InjectRepository(Vaga)
    private vagaRepository: Repository<Vaga>,
    @InjectRepository(Candidato)
    private candidatoRepository: Repository<Candidato>,
  ) {}

  async confirmarMatch(vagaId: number, candidatoId: number): Promise<ConfirmMatch> {
    const vaga = await this.vagaRepository.findOne({ where: { id: vagaId } });
    const candidato = await this.candidatoRepository.findOne({ where: { id: candidatoId } });

    if (!vaga || !candidato) {
      throw new Error('Vaga ou candidato não encontrados');
    }

    const confirmMatch = new ConfirmMatch();
    confirmMatch.vaga = vaga;
    confirmMatch.candidato = candidato;
    
    return this.confirmMatchRepository.save(confirmMatch);
  }

  async contratarMatch(id: number): Promise<ConfirmMatch> {
    const match = await this.confirmMatchRepository.findOne({ where: { id } });

    if (!match) {
      throw new Error('Match não encontrado');
    }

    match.iscontratado = true;  // Atualiza o campo iscontratado para true
    return this.confirmMatchRepository.save(match);  // Salva as alterações no banco de dados
  }

}
