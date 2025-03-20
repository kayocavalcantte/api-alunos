import { AlunoCadeiraStatus } from '@prisma/client';

export class AlunoCadeiraStatusEntity implements AlunoCadeiraStatus {
  id: number;
  descricao: string;
}
