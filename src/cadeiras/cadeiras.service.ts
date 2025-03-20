import { Injectable } from '@nestjs/common';
import { CreateCadeiraDto } from './dto/create-cadeira.dto';
import { UpdateCadeiraDto } from './dto/update-cadeira.dto';
import { CadeirasRepository } from './repositories/cadeiras.repositoy';

@Injectable()
export class CadeirasService {
  constructor(private readonly cadeiraRepository: CadeirasRepository) {}

  async create(data: CreateCadeiraDto) {
    return this.cadeiraRepository.create(data);
  }

  async findAll() {
    return this.cadeiraRepository.findAll();
  }

  findOne(id: number) {
    return this.cadeiraRepository.findOne(id);
  }

  update(id: number, updateCadeiraDto: UpdateCadeiraDto) {
    return this.cadeiraRepository.update(id, updateCadeiraDto);
  }

  async remove(id: number) {
    return this.cadeiraRepository.remove(id);
  }
}
