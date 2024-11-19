// src/entities/confirmMatch.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Vaga } from '../empresa/vaga.entity';
import { Candidato } from '../candidato/candidato.entity';

@Entity('confirmMatch')
export class ConfirmMatch {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vaga, vaga => vaga.id)
  @JoinColumn({ name: 'vaga_id' })  // Explicitamente mapeando a coluna vaga_id
  vaga: Vaga;

  @ManyToOne(() => Candidato, candidato => candidato.id)
  @JoinColumn({ name: 'candidato_id' })  // Explicitamente mapeando a coluna candidato_id
  candidato: Candidato;

  @Column({ default: false })
  iscontratado: boolean;
}
