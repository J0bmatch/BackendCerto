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

  async login(rm: string, dataNascimento: string): Promise<{ isFirstAccess?: boolean; message?: string }> {
    // Verifica se o candidato existe no banco de dados
    const candidato = await this.candidatoRepository.findOne({ where: { rm, dataNascimento } });

    // Se o candidato não existir, retorna uma mensagem
    if (!candidato) {
      return { message: 'Usuário não existe' }; // Mensagem para usuário não encontrado
    }

    // Se o candidato existir, verifica se a experiência está preenchida
    const isFirstAccess = !candidato.experiencia; // Retorna true se a experiência for indefinida ou nula

    return { isFirstAccess }; // Retorna se é o primeiro acesso
  }
}
