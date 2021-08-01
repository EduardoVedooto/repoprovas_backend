import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Professors } from './Professors';

@Entity()
export class Subjects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Professors, professor => professor.subjects)
  @JoinTable()
  professors: Professors[];
}
