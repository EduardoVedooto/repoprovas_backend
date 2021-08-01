import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categories } from './Categories';
import { Professors } from './Professors';

@Entity()
export class Exams {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subject: string;

  @ManyToOne(() => Categories, categories => categories.exams)
  category: Categories;

  @Column()
  pdf: string;

  @ManyToOne(() => Professors, professor => professor.exams)
  professor: Professors;
}
