import { Request, Response } from 'express';
import * as services from '@services/subjects';

export const getSubjects = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await services.find();
    return res.send(response);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};
