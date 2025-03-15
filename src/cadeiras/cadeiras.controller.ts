import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CadeirasService } from './cadeiras.service';
import { CreateCadeiraDto } from './dto/create-cadeira.dto';
import { UpdateCadeiraDto } from './dto/update-cadeira.dto';

@Controller('cadeiras')
export class CadeirasController {
  constructor(private readonly cadeirasService: CadeirasService) {}

  @Post()
  create(@Body() createCadeiraDto: CreateCadeiraDto) {
    return this.cadeirasService.create(createCadeiraDto);
  }

  @Get()
  findAll() {
    return this.cadeirasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadeirasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadeiraDto: UpdateCadeiraDto) {
    return this.cadeirasService.update(+id, updateCadeiraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadeirasService.remove(+id);
  }
}
