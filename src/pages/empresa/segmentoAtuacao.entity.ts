import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('segmentoatuacao')
export class SegmentoAtuacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  descricao: string;

  @Column({ length: 15 })
  setor: string;

}
