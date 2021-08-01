import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exams } from './Exams';
import { Subjects } from './Subjects';

@Entity()
export class Professors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Subjects, subject => subject.professors)
  subjects: Subjects[];

  @OneToMany(() => Exams, exams => exams.professor)
  exams: Exams[];
}
