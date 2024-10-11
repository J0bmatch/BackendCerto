import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Address } from 'cluster';

@Entity('perfilempresateste')
export class PerfilEmp {
  @PrimaryGeneratedColumn()
  PE_id: number;

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
