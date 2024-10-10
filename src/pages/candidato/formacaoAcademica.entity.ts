import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FormacaoAcademica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  curso: string;

  @Column({ length: 50 })
  instituicao: string;

  @Column({ length: 20 })
  cidade: string;

  @Column({ length: 2 })
  estado: string;

  /*
  // Caso deseje adicionar relações futuras, você pode descomentar e modificar conforme necessário
  @ManyToOne(() => OutraEntidade, { eager: true }) // Relação Many-To-One com OutraEntidade
  @JoinColumn({ name: 'outra_entidade_id' })
  outraEntidade: OutraEntidade;
  */
}
