import {Controller, Get, Param} from '@nestjs/common';
import {PerfilEService} from './perfilE.service';

@Controller('perfilE')
export class PerfilEController{
    constructor(private readonly perfiEService: PerfilEService){}

    @Get(':id')
    async obterPerfil(@Param('id') id:number){
        return await this.perfiEService.obterPerfilEmpresa(id);
    }
}