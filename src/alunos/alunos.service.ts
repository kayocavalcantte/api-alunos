import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AlunosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAlunoDto) {
    const resp = await this.prisma.aluno.create({
      data,
    });
    return resp;
  }

  async findAll() {
    const resp = await this.prisma.aluno.findMany();
    return resp;
  }

  findOne(id: number) {
    const resp = this.prisma.aluno.findUnique({
      where: { id: id },
    });
    if (resp == undefined || resp == null) {
      throw new NotFoundException(`Aluno #${id} not found`);
    }
    return resp;
  }

  update(id: number, updateAlunoDto: UpdateAlunoDto) {
    void this.findOne(id);
    const resp = this.prisma.aluno.update({
      where: { id: id },
      data: updateAlunoDto,
    });
    return resp;
  }

  async remove(id: number) {
    void this.findOne(id);
    const resp = await this.prisma.aluno.delete({
      where: { id: id },
    });
    return resp;
  }

  async addCadeira(id: number, idCadeira: number) {
    const resp = this.prisma
      .$queryRaw`INSERT INTO "aluno_cadeira"(aluno_id, cadeira_id) VALUES (${id}, ${idCadeira})`;
    return resp;
  }

  async findAlunoCadeiras(id: number) {
    const resp = this.prisma
      .$queryRaw`SELECT a.nome, STRING_AGG(c.nome, ', ') as cadeira
      from alunos a , cadeiras c , aluno_cadeira ac 
      where ac.aluno_id = ${id}
      and ac.aluno_id = a.id 
      and ac.cadeira_id = c.id
      group by a.nome`;

    return resp;
  }
}
