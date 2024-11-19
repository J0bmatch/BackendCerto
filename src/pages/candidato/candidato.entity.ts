import { Habilidades, Interesses, Endereco } from '../ambos/compartilhado.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, JoinTable, ManyToMany } from 'typeorm';

@Entity('candidato')
export class Candidato {
  getAllCandidatos() {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 15 })
  telefone: string;

  @Column({ length: 15 })
  idiomas: string;

  @Column({ length: 50 })
  bio: string;

  @Column({ length: 15 })
  fluencia: string;

  @Column({ nullable: true })
  experiencia: string;
  
  @Column({ length: 9 })
  cep: string;

  @Column({ length: 20 })
  rua: string;

  @Column({ length: 20 })
  bairro: string;

  @Column({ length: 20 })
  cidade: string;

  @Column({ length: 2 })
  estado: string;

  @Column({ length: 20 })
  curso: string;

  @Column({ length: 50 })
  instituicao: string;

  @Column({ length: 50 })
  nomesocial: string;

  @Column({ length: 4 })
  numero: string;

  @Column({ length: 11 })
  dataNascimento: string;


  @Column({ length: 5 })
  rm: string;

  @Column({ length: 50 })
  tipodeficiencia: string;

  @Column({ length: 50 })
  graudeficiencia: string;

  @Column({ length: 50 })
  adaptacaodeficiencia: string;

  @ManyToMany(() => Interesses)
  @JoinTable({ name: 'candidato_interesses' })
  interesses: Interesses[];

  @ManyToMany(() => Habilidades)
  @JoinTable({ name: 'candidato_habilidades' }) // Nome da tabela de junção
  habilidades: Habilidades[];

  @OneToOne(() => Endereco)
@JoinColumn({ name: 'endereco_id' }) // A coluna que vai armazenar o ID do endereço
endereco: Endereco;

  
}
