import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroEmpresa } from './cadastroempresa.entity';

@Injectable()
export class CadastroEmpresaService {
  constructor(
    @InjectRepository(CadastroEmpresa)
    private cadastroEmpresaRepository: Repository<CadastroEmpresa>,
  ) {}

  async create(data: CadastroEmpresa): Promise<CadastroEmpresa> {
    const cadastroEmpresa = this.cadastroEmpresaRepository.create(data);
    return this.cadastroEmpresaRepository.save(cadastroEmpresa);
  }
  // Método para buscar um cadastro de empresa por ID
  async obterCadastroPorId(id: number): Promise<CadastroEmpresaService> {
    const cadastro = await this.cadastroEmpresaRepository.findOne({
      where: { CE_cnpj: id },
    });
    if (!cadastro) {
      throw new Error(`Cadastro de empresa com o ID ${id} não encontrado.`);
    }

    return cadastro;
}}
