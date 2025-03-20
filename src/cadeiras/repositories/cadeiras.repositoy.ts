import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateCadeiraDto } from '../dto/create-cadeira.dto';
import { UpdateCadeiraDto } from '../dto/update-cadeira.dto';

@Injectable()
export class CadeirasRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCadeiraDto) {
    if (!data.nome || data.nome.trim().length === 0) {
      throw new Error('O nome da cadeira não pode ser vazio ou nulo.');
    }
    const resp = await this.prisma.cadeira.create({
      data,
    });
    return resp;
  }

  async findAll() {
    const resp = await this.prisma.cadeira.findMany();
    return resp;
  }

  findOne(id: number) {
    const resp = this.prisma.cadeira.findUnique({
      where: { id: id },
    });
    return resp;
  }

  update(id: number, updateCadeiraDto: UpdateCadeiraDto) {
    void this.findOne(id);
    const resp = this.prisma.cadeira.update({
      where: { id: id },
      data: updateCadeiraDto,
    });
    return resp;
  }

  async remove(id: number) {
    void this.findOne(id);
    const resp = await this.prisma.cadeira.delete({
      where: { id: id },
    });
    return resp;
  }
}
