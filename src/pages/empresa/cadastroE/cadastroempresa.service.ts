import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../Empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private EmpresaRepository: Repository<Empresa>,
  ) {}

  async create(data: Empresa): Promise<Empresa> {
    const Empresa = this.EmpresaRepository.create(data);
    return this.EmpresaRepository.save(Empresa);
  }
}
