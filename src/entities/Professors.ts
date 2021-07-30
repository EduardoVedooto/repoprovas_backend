import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Subjects } from './Subjects';

@Entity()
export class Professors {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Subjects, subject => subject.professors)
  subjects: Subjects[];
}
