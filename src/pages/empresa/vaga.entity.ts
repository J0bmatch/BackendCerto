import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
//import { Habilidades } from './habilidades.entity'; // Importação da entidade Habilidades
//import { Interesses } from './interesses.entity'; // Importação da entidade Interesses
//import { Empresa } from './empresa.entity'; // Importação da entidade Empresa

@Entity()
export class Vaga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  descricao: string;

  @Column('text')
  exigencias: string;

  @Column()
  funcao: string;

  @Column('float', { precision: 5 })
  salario: number;

  @Column('text')
  riscos: string;

  @Column()
  googleForm: string;
/*
  @ManyToOne(() => Habilidades, { eager: true }) // Relação Many-To-One com Habilidades
  @JoinColumn({ name: 'habilidades_id' })
  habilidades: Habilidades;

  @ManyToOne(() => Interesses, { eager: true }) // Relação Many-To-One com Interesses
  @JoinColumn({ name: 'interesses_id' })
  interesses: Interesses;

  @ManyToOne(() => Empresa, { eager: true }) // Relação Many-To-One com Empresa
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;
  */
}