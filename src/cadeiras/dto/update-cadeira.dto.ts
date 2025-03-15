import { PartialType } from '@nestjs/mapped-types';
import { CreateCadeiraDto } from './create-cadeira.dto';

export class UpdateCadeiraDto extends PartialType(CreateCadeiraDto) {}
