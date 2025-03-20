import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AlunosRepository } from './repositories/alunos.repository';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService, PrismaService, AlunosRepository],
})
export class AlunosModule {}
