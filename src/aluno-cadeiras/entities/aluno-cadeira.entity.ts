import { AlunoCadeira } from '@prisma/client';

export class AlunoCadeiraEntity implements AlunoCadeira {
  aluno_id: number;
  cadeira_id: number;
  start_date: Date;
  end_date: Date;
  status_id: number;
}
