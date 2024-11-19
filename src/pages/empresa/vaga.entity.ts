import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Habilidades } from '../ambos/compartilhado.entity';
import { Interesses } from '../ambos/compartilhado.entity';
import { Empresa } from './empresa.entity';

@Entity('vaga')
export class Vaga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  descricao: string;

  @Column('text')
  exigencias: string;

  @Column({ length: 500 })
  funcao: string;

  @Column('float', { precision: 5 })
  salario: number;

  @Column('text')
  riscos: string;

  @Column('text')
  googleForm: string;

  @ManyToMany(() => Habilidades, { eager: true })
  @JoinTable({
    name: 'vaga_habilidades', // Nome da tabela de junção
    joinColumn: { name: 'vaga_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'habilidades_id', referencedColumnName: 'id' },
  })
  habilidades: Habilidades[];

  @ManyToMany(() => Interesses, { eager: true })
  @JoinTable({
    name: 'vaga_interesses', // Nome da tabela de junção
    joinColumn: { name: 'vaga_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'interesses_id', referencedColumnName: 'id' },
  })
  interesses: Interesses[];

  @ManyToOne(() => Empresa, { eager: true })
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;
}