import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('empresa') //nome da tabela no bd
export class PerfilEmp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  CE_nomeempresa: string;

  @Column('longtext')
  SA_descricao: string;
  
  @Column('longtext')
  EmpresaEndereco_EE_cep: string;

  @Column('longtext')
  CE_rendamensal: number;

  @Column('longtext')
  EmpresaCandidato_EC_id: number;
}
