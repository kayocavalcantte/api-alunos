import { Aluno } from '@prisma/client';

export class AlunoEntity implements Aluno {
  id: number;
  nome: string;
  email: string;
  cpf: string;
}
