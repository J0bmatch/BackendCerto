import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vaga } from '../../empresa/vaga.entity';
import { Candidato } from '../../candidato/candidato.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Vaga)
    private readonly vagaRepository: Repository<Vaga>,
    
    @InjectRepository(Candidato)
    private readonly candidatoRepository: Repository<Candidato>,
  ) {}

  async findMatchingVagas(candidatoId: number): Promise<Vaga[]> {
    // Carrega o candidato com suas habilidades e interesses
    const candidato = await this.candidatoRepository.findOne({
      where: { id: candidatoId },
      relations: ['habilidades', 'interesses'],
    });

    if (!candidato) {
      throw new Error('Candidato não encontrado.');
    }

    const candidatoHabilidades = candidato.habilidades.map(h => h.id);
    const candidatoInteresses = candidato.interesses.map(i => i.id);

    // Encontra as vagas que possuem pelo menos uma das habilidades ou interesses do candidato
    const vagas = await this.vagaRepository
      .createQueryBuilder('vaga')
      .leftJoinAndSelect('vaga.habilidades', 'habilidade')
      .leftJoinAndSelect('vaga.interesses', 'interesse')
      .where('habilidade.id IN (:...habilidades)', { habilidades: candidatoHabilidades })
      .orWhere('interesse.id IN (:...interesses)', { interesses: candidatoInteresses })
      .getMany();

    // Filtra as vagas com maior número de correspondências
    const vagasComPontuacao = vagas.map(vaga => {
      const matchingHabilidades = vaga.habilidades.filter(h => candidatoHabilidades.includes(h.id)).length;
      const matchingInteresses = vaga.interesses.filter(i => candidatoInteresses.includes(i.id)).length;
      const totalMatch = matchingHabilidades + matchingInteresses;

      return { vaga, totalMatch };
    });

    // Ordena as vagas pela quantidade de correspondências e limita o resultado a 20 vagas
    const vagasOrdenadas = vagasComPontuacao
      .sort((a, b) => b.totalMatch - a.totalMatch)
      .slice(0, 20)
      .map(v => v.vaga);

    return vagasOrdenadas;
  }
}
