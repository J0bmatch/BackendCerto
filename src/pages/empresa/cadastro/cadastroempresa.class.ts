import { CadastroEmpresa } from './cadastroempresa.interface';
export interface Address {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  }
export class CadastroEmpresaClass implements CadastroEmpresa {
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

  constructor(
    cnpj: number, 
    nomeempresa: string, 
    telefone: string,
    email: string,
    fotoperfil: Buffer,
    descricao: string,
    rendamensal: number,
    EC_id: number,
    cep: string,  // Usando string para o CEP
    SA_id: number
  ) {
    this.CE_cnpj = cnpj;
    this.CE_nomeempresa = nomeempresa;
    this.CE_telefone = telefone;
    this.CE_email = email;
    this.CE_fotoperfil = fotoperfil;
    this.CE_descricao = descricao;
    this.CE_rendamensal = rendamensal;
    this.EmpresaCandidato_EC_id = EC_id;
    this.EmpresaEndereco_EE_cep = cep;
    this.segmentoAtuacao_SA_id = SA_id;
  }
}
