import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('perfilempresateste')
export class PerfilEmp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  CE_nomeempresa: string;

  @Column('longtext')
  SA_descricao: string;
  
  @Column(type => Address)
  EmpresaEndereco_EE_cep: address;

  @Column('longtext')
  CE_rendamensal: number;

  @Column('longtext')
  EmpresaCandidato_EC_id: number;
}
