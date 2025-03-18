import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AlunoCadeirasService } from './aluno-cadeiras.service';
import { CreateAlunoCadeiraDto } from './dto/create-aluno-cadeira.dto';

@Controller('aluno-cadeiras')
export class AlunoCadeirasController {
  constructor(private readonly alunoCadeirasService: AlunoCadeirasService) {}

  @Post()
  create(@Body() createAlunoCadeiraDto: CreateAlunoCadeiraDto) {
    return this.alunoCadeirasService.create(createAlunoCadeiraDto);
  }

  @Get()
  findAll() {
    return this.alunoCadeirasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunoCadeirasService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') alunoId: string,
    @Body() body: { cadeiraId: string; status_id: string },
  ) {
    return this.alunoCadeirasService.update(
      alunoId,
      body.cadeiraId,
      body.status_id,
    );
  }

  @Delete(':id')
  remove(@Param('id') alunoId: string, @Body() body: { cadeira_id: number }) {
    return this.alunoCadeirasService.remove(+alunoId, body.cadeira_id);
  }
}
