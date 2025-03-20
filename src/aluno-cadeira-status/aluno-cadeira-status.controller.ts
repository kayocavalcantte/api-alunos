import { Controller, Get, Param } from '@nestjs/common';
import { AlunoCadeiraStatusService } from './aluno-cadeira-status.service';

@Controller('aluno-cadeira-status')
export class AlunoCadeiraStatusController {
  constructor(
    private readonly alunoCadeiraStatusService: AlunoCadeiraStatusService,
  ) {}

  @Get()
  findAll() {
    return this.alunoCadeiraStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunoCadeiraStatusService.findOne(+id);
  }
}
