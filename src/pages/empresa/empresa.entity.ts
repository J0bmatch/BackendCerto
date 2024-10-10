import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//import { Endereco } from './endereco.entity'; // Importação da entidade Endereco
//import { SegmentoAtuacao } from './segmentoatuacao.entity'; // Importação da entidade SegmentoAtuacao

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

  /*
  @ManyToOne(() => Endereco, { eager: true }) // Relação Many-To-One com Endereco
  @JoinColumn({ name: 'endereco_id' })
  endereco: Endereco;

  @ManyToOne(() => SegmentoAtuacao, { eager: true }) // Relação Many-To-One com SegmentoAtuacao
  @JoinColumn({ name: 'segmentoatuacao_id' })
  segmentoAtuacao: SegmentoAtuacao;
  */
}