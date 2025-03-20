import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma/prisma.service';
import { AlunosModule } from './alunos/alunos.module';
import { CadeirasModule } from './cadeiras/cadeiras.module';
import { AlunoCadeirasModule } from './aluno-cadeiras/aluno-cadeiras.module';
import { AlunoCadeiraStatusModule } from './aluno-cadeira-status/aluno-cadeira-status.module';

@Module({
  imports: [
    AlunosModule,
    CadeirasModule,
    AlunoCadeirasModule,
    AlunoCadeiraStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
