/*import {Injectable} from '@nestjs/common';
import { CadastroEmpresaService } from '../cadastro/cadastroempresa.service';

@Injectable()
export class PerfilEService{

    constructor(private readonly cadastroempresaService: CadastroEmpresaService){}

    async create(): Promise<PerfilEE> {
        const perfilee = this..create({
          CE_id:,
          VE_exigencias: exigencias,
        });
        return this.vagaRepository.save(vaga);
      }
    //obtem informaçõea empresas por id
    async obterPerfilEmpresa(id: number){
    //busca dados do cadastro
        const cadastroempresa= await this.cadastroempresaService.obterCadastroPorId(id);
    
        //montando o perfil da empresa com base no cadastro
    const empresa={
        id: Number,
        CE_nomeempresa: cadastroempresa.CE_nomeempresa,
        SA_descricao: cadastroempresa.SA_descricao,
        CE_fotoperfil: cadastroempresa.CE_fotoperfil,
        EmpresaEndereco_EE_cep: cadastroempresa.EmpresaEndereco_EE_cep,
        CE_rendamensal: cadastroempresa.CE_rendamensal,
        EmpresaCandidato_EC_id: cadastroempresa.EmpresaCandidato_EC_id
    };
    return empresa;    
    }   
}
*/