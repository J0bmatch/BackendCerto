
import { Controller, Post, Body, Param } from '@nestjs/common';
import { ConfirmMatchService } from './confirmaMatch.service';

@Controller('confirmMatch')
export class ConfirmMatchController {
  constructor(private readonly confirmMatchService: ConfirmMatchService) {}

  @Post()
  async confirmarMatch(
    @Body('vagaId') vagaId: number,
    @Body('candidatoId') candidatoId: number,
  ) {
    return this.confirmMatchService.confirmarMatch(vagaId, candidatoId);
  }

  @Post(':id/contratar')
  async contratarMatch(@Param('id') id: number) {
    return this.confirmMatchService.contratarMatch(id);
  }
}