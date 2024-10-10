import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SegmentoAtuacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  descricao: string;

  @Column({ length: 15 })
  setor: string;

  /*
  // Caso deseje adicionar relações futuras, você pode descomentar e modificar conforme necessário
  @ManyToOne(() => OutraEntidade, { eager: true }) // Relação Many-To-One com OutraEntidade
  @JoinColumn({ name: 'outra_entidade_id' })
  outraEntidade: OutraEntidade;
  */
}
