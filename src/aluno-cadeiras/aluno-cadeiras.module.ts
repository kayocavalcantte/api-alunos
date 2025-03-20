import { Module } from '@nestjs/common';
import { AlunoCadeirasService } from './aluno-cadeiras.service';
import { AlunoCadeirasController } from './aluno-cadeiras.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AlunoCadeirasRepository } from './repositories/aluno-cadeiras.repository';

@Module({
  controllers: [AlunoCadeirasController],
  providers: [AlunoCadeirasService, PrismaService, AlunoCadeirasRepository],
})
export class AlunoCadeirasModule {}
