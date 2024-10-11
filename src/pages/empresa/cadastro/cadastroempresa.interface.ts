import { Address } from 'cluster';
export interface CadastroEmpresa {
    CE_cnpj: number;
    CE_nomeempresa: string;
    CE_telefone: string;
    CE_email: string;
    CE_fotoperfil: Buffer;
    CE_descricao: string;
    CE_rendamensal: number;
    EmpresaCandidato_EC_id: number;
    EmpresaEndereco_EE_cep: string;
    segmentoAtuacao_SA_id: number;
  }
  