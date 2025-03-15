import { Module } from '@nestjs/common';
import { CadeirasService } from './cadeiras.service';
import { CadeirasController } from './cadeiras.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [CadeirasController],
  providers: [CadeirasService, PrismaService],
})
export class CadeirasModule {}
