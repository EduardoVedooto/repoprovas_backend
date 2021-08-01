import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categories } from './Categories';

@Entity()
export class Exams {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  subject: string;

  @ManyToOne(() => Categories, categories => categories.exams)
  category: string;

  @Column()
  pdf: string;
}
