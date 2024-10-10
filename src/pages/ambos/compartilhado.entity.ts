// src/pages/ambos/entities.ts
//tabelas de: endereço, habilidades e interesses

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('endereco')
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

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
}

@Entity('habilidades')
export class Habilidades {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  descricao: string;

  @Column({ length: 20 })
  tipo: string;
}

@Entity('interesses')
export class Interesses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  descricao: string;

  @Column({ length: 20 })
  tipo: string;
}