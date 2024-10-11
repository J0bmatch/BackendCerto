export interface Perfil {
    id: number; // O ID será fornecido a partir dos dados da vaga
    nome: string; // Nome do candidato, associado à vaga
    localidade: string; // Localidade do candidato
    habilidadesInterpessoais: string[]; // Habilidades interpessoais do candidato, provenientes da vaga
    habilidadesCognitivas: string[]; // Habilidades cognitivas do candidato
    habilidadesPessoais: string[]; // Habilidades pessoais do candidato
  }
  