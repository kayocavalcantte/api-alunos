import { Injectable } from '@nestjs/common';
import { AlunoCadeiraStatusRepository } from './repositories/aluno-cadeira-status.repository';

@Injectable()
export class AlunoCadeiraStatusService {
  constructor(
    private readonly alunoCadeiraStatusRepository: AlunoCadeiraStatusRepository,
  ) {}

  findAll() {
    return this.alunoCadeiraStatusRepository.findAll();
  }

  findOne(id: number) {
    return this.alunoCadeiraStatusRepository.findOne(id);
  }
}
