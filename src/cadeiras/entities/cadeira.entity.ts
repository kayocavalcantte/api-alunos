import { Cadeira } from '@prisma/client';

export class CadeiraEntity implements Cadeira {
  id: number;
  nome: string;
}
