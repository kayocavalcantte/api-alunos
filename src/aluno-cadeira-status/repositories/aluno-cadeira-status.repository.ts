import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AlunoCadeiraStatusEntity } from '../entities/aluno-cadeira-status.entity';

@Injectable()
export class AlunoCadeiraStatusRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<AlunoCadeiraStatusEntity[]> {
    const resp = await this.prisma.alunoCadeiraStatus.findMany();
    return resp;
  }

  async findOne(id: number) {
    const resp = this.prisma.alunoCadeiraStatus.findUnique({
      where: { id: id },
    });
    return resp;
  }
}
