import { Professors } from 'src/entities/Professors';
import { getRepository } from 'typeorm';

const repository = getRepository(Professors);

export const find = async (): Promise<Professors[]> => {
  return repository.find();
};
