import { PartialType } from '@nestjs/mapped-types';
import { CreateUpdateAlunoCadeiraDto } from './create-update.dto';

export class UpdateAlunoCadeiraDto extends PartialType(
  CreateUpdateAlunoCadeiraDto,
) {}
