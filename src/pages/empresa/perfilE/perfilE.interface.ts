export interface PerfilE {
  PE_id: number;
  CE_nomeempresa: string;
  SA_descricao: string;
  CE_fotoperfil: string; // Supondo que esta propriedade seja opcional
  EmpresaEndereco_EE_cep: string;
  CE_rendamensal: number;
  EmpresaCandidato_EC_id: number;
}
