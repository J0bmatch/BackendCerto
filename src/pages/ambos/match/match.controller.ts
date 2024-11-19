import { Controller, Get, Param } from '@nestjs/common';
import { MatchService } from './match.service';
import { Vaga } from '../../empresa/vaga.entity';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get(':candidatoId')
  async getMatchingVagas(@Param('candidatoId') candidatoId: number): Promise<Vaga[]> {
    return this.matchService.findMatchingVagas(candidatoId);
  }
}