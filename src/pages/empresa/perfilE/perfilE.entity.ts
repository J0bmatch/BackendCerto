import { Address } from 'cluster';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('perfilempresatext')
export class Perfilem {
  @PrimaryGeneratedColumn()
  PE_id: number;

  @Column('longtext')
  CE_nomeempresa: string;

  @Column('longtext')
  SA_descricao: string;

  @Column('buffer')
  CE_fotoperfil: Buffer;

  @Column('Address')
  EmpresaEndereco_EE_cep: Address;

  @Column('number')
  CE_rendamensal: number;

  @Column('text')
  EmpresaCandidato_EC_id: number;
}
