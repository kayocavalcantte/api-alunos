import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { AlunoEntity } from '../entities/aluno.entity';
import { UpdateAlunoDto } from '../dto/update-aluno.dto';

@Injectable()
export class AlunosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAlunoDto): Promise<AlunoEntity> {
    const resp = await this.prisma.aluno.create({
      data,
    });
    return resp;
  }

  async findAll(): Promise<AlunoEntity[]> {
    const resp = await this.prisma.aluno.findMany();
    return resp;
  }

  async findOne(id: number): Promise<AlunoEntity> {
    const resp = await this.prisma.aluno.findUnique({
      where: { id: id },
    });
    if (resp == undefined || resp == null) {
      throw new NotFoundException(`Aluno #${id} not found`);
    }
    return resp;
  }

  async update(
    id: number,
    updateAlunoDto: UpdateAlunoDto,
  ): Promise<AlunoEntity> {
    void this.findOne(id);
    const resp = this.prisma.aluno.update({
      where: { id: id },
      data: updateAlunoDto,
    });
    return resp;
  }

  async remove(id: number) {
    const resp = await this.prisma.aluno.delete({
      where: { id: id },
    });
    return resp;
  }
}
