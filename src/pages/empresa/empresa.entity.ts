import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SegmentoAtuacao } from './segmentoAtuacao.entity'; // Importação da entidade SegmentoAtuacao

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cnpj: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column({ length: 30 })
  segatuacao: string;

  @Column({ length: 9 })
  cep: string;

  @Column({ length: 50 })
  rua: string;

  @Column({ length: 50 })
  bairro: string;

  @Column({ length: 50 })
  cidade: string;

  @Column({ length: 50 })
  estado: string;

  @Column({ length: 50 })
  pais: string;

  @Column()
  fotoperfil: string;

  @Column()
  nomeUltilizador: string;

  @Column()
  senha: string;

  @Column()
  nomeEmpresa: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column('text')
  descricao: string;

  @ManyToOne(() => SegmentoAtuacao, { eager: true }) 
  @JoinColumn({ name: 'segmentoatuacao_id' })
  segmentoAtuacao: SegmentoAtuacao;

}