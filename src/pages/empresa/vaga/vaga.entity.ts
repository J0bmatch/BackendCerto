import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PerfilE } from '../perfilE/perfilE.interface';
import { PerfilEService } from '../perfilE/perfilE.service';
import { Perfilem } from '../perfilE/perfilE.entity';

@Entity('vagaempresateste')
export class Vaga {
  @PrimaryGeneratedColumn()
  VE_id: number;

  @Column('longtext')
  titulo: string;

  @Column('longtext')
  VE_descricao: string;

  @Column('longtext')
  VE_exigencias: string;

  @Column('longtext')
  habilidadesInterpessoais: string;

  @Column('longtext')
  habilidadesCognitivas: string;

  @Column('longtext')
  habilidadesPessoais: string;

  @Column()
  CE_id: number; //a qual emprea pertence aquela vaga
}
