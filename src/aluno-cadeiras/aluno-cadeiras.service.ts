import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateAlunoCadeiraDto } from './dto/create-aluno-cadeira.dto';

@Injectable()
export class AlunoCadeirasService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAlunoCadeiraDto: CreateAlunoCadeiraDto) {
    try {
      const resp = this.prisma.alunoCadeira.create({
        data: {
          aluno_id: createAlunoCadeiraDto.alunoId,
          cadeira_id: createAlunoCadeiraDto.cadeiraId,
          start_date: new Date(),
          end_date: new Date('1900-01-01'),
          status_id: createAlunoCadeiraDto.status_id,
        },
      });

      // const resp = this.prisma.$queryRaw`
      //   INSERT INTO "aluno_cadeira"(aluno_id, cadeira_id, status_id)
      //   VALUES (${alunoId}, ${cadeiraId}, ${statusId})`;
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      const resp = this.prisma.alunoCadeira.findMany();
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    try {
      const resp = this.prisma
        .$queryRaw`SELECT ac.aluno_id, a.nome , STRING_AGG(c.nome, ', ') AS cadeira, acs.descricao AS status_descricao
    FROM 
        alunos a
    JOIN 
        aluno_cadeira ac ON ac.aluno_id = a.id
    JOIN 
        cadeiras c ON ac.cadeira_id = c.id
    JOIN
        aluno_cadeira_status acs ON ac.status_id = acs.id
    WHERE 
        ac.aluno_id = ${id}
    GROUP BY 
        a.id, ac.aluno_id, a.nome, acs.descricao;
    `;

      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  update(aluno_id: string, cadeira_id: string, status_id: string) {
    try {
      // const alunoId = parseInt(aluno_id.toString(), 10);
      // const cadeiraId = parseInt(cadeira_id.toString(), 10);
      // const resp = this.prisma.alunoCadeira.update({
      //   where: {
      //     aluno_id_cadeira_id: {
      //       aluno_id: alunoId,
      //       cadeira_id: cadeiraId,
      //     },
      //   },
      //   data: {
      //     end_date: UpdateAlunoCadeiraDto.end_date,
      //     status_id: UpdateAlunoCadeiraDto.status_id,
      //   },
      // });

      const newDate = new Date();

      const resp = this.prisma.$queryRaw`
      UPDATE aluno_cadeira
      SET end_date = ${newDate}, status_id = ${Number(status_id)}
      WHERE aluno_id = ${Number(aluno_id)} AND cadeira_id = ${Number(cadeira_id)}`;

      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  remove(aluno_id: number, cadeira_id: number) {
    try {
      const alunoId = parseInt(aluno_id.toString(), 10);
      const cadeiraId = parseInt(cadeira_id.toString(), 10);

      const resp = this.prisma.alunoCadeira.delete({
        where: {
          aluno_id_cadeira_id: {
            aluno_id: alunoId,
            cadeira_id: cadeiraId,
          },
        },
      });
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
}
