import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../empresa.entity';

@Injectable()
export class LoginEService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  async login(email: string, senha: string): Promise<any> {
    const empresa = await this.empresaRepository.findOne({ where: { email, senha } });
    if (empresa) {
      return { message: 'Login bem-sucedido', empresa };
    } else {
      return { message: 'Email ou senha inválidos' };
    }
  }
}
