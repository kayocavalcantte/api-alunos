import { Module } from '@nestjs/common';
import { CadeirasService } from './cadeiras.service';
import { CadeirasController } from './cadeiras.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CadeirasRepository } from './repositories/cadeiras.repositoy';

@Module({
  controllers: [CadeirasController],
  providers: [CadeirasService, PrismaService, CadeirasRepository],
})
export class CadeirasModule {}
