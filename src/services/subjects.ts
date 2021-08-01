import { Subjects } from 'src/entities/Subjects';
import { getRepository } from 'typeorm';

const repository = getRepository(Subjects);

export const find = async (): Promise<Subjects[]> => {
  return repository.find();
};
