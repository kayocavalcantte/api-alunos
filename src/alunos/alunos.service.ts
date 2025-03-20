import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AlunosRepository } from './repositories/alunos.repository';
@Injectable()
export class AlunosService {
  constructor(private readonly alunoRepository: AlunosRepository) {}

  create(data: CreateAlunoDto) {
    return this.alunoRepository.create(data);
  }

  findAll() {
    return this.alunoRepository.findAll();
  }

  findOne(id: number) {
    return this.alunoRepository.findOne(id);
  }

  update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return this.alunoRepository.update(id, updateAlunoDto);
  }

  async remove(id: number) {
    return this.alunoRepository.remove(id);
  }
}
