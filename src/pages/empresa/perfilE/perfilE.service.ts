import { Injectable } from '@nestjs/common';
import { CadastroEmpresaService } from '../cadastro/cadastroempresa.service';
import { PerfilE } from './perfilE.interface'; // Interface definida para o PerfilE

@Injectable()
export class PerfilEService {
  constructor(
    private readonly cadastroEmpresaService: CadastroEmpresaService,
  ) {}

  async create(perfilEData: PerfilE): Promise<PerfilE> {
    return perfilEData;
  }

  async obterPerfilEmpresa(id: number): Promise<PerfilE> {
    const cadastroempresa = await this.cadastroEmpresaService.obterCadastroPorId(id);

    if (!cadastroempresa) {
      throw new Error('Cadastro da empresa não encontrado');
    }

    const perfilEmpresa: PerfilE = {
      PE_id: id,
      CE_nomeempresa: cadastroempresa.CE_nomeempresa,
      SA_descricao: cadastroempresa.SA_descricao,
      CE_fotoperfil: cadastroempresa.CE_fotoperfil,
      EmpresaEndereco_EE_cep: cadastroempresa.EmpresaEndereco_EE_cep,
      CE_rendamensal: cadastroempresa.CE_rendamensal,
      EmpresaCandidato_EC_id: cadastroempresa.EmpresaCandidato_EC_id,
    };

    return perfilEmpresa;
  }
}
