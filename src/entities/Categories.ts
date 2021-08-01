import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exams } from './Exams';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exams, exams => exams.category)
  exams: Exams;
}
