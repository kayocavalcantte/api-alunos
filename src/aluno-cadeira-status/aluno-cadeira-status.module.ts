import { Module } from '@nestjs/common';
import { AlunoCadeiraStatusService } from './aluno-cadeira-status.service';
import { AlunoCadeiraStatusController } from './aluno-cadeira-status.controller';
import { AlunoCadeiraStatusRepository } from './repositories/aluno-cadeira-status.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [AlunoCadeiraStatusController],
  providers: [
    AlunoCadeiraStatusService,
    PrismaService,
    AlunoCadeiraStatusRepository,
  ],
})
export class AlunoCadeiraStatusModule {}
