import { Injectable } from '@nestjs/common';
import { CreateAlunoCadeiraDto } from './dto/create-aluno-cadeira.dto';
import { AlunoCadeirasRepository } from './repositories/aluno-cadeiras.repository';

@Injectable()
export class AlunoCadeirasService {
  constructor(
    private readonly alunoCadeiraRepository: AlunoCadeirasRepository,
  ) {}

  create(createAlunoCadeiraDto: CreateAlunoCadeiraDto) {
    return this.alunoCadeiraRepository.create(createAlunoCadeiraDto);
  }

  findAll() {
    return this.alunoCadeiraRepository.findAll();
  }

  findOne(id: number) {
    return this.alunoCadeiraRepository.findOne(id);
  }

  update(aluno_id: number, cadeira_id: number, status_id: number) {
    return this.alunoCadeiraRepository.update(aluno_id, cadeira_id, status_id);
  }

  remove(aluno_id: number, cadeira_id: number) {
    return this.alunoCadeiraRepository.remove(aluno_id, cadeira_id);
  }
}
