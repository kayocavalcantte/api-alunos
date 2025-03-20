import { PartialType } from '@nestjs/mapped-types';
import { CreateAlunoCadeiraStatusDto } from './create-aluno-cadeira-status.dto';

export class UpdateAlunoCadeiraStatusDto extends PartialType(CreateAlunoCadeiraStatusDto) {}
