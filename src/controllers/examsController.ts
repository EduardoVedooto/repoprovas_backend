// import { Request, Response } from 'express';
// import { IExams } from '@interface/Exams';
// import * as examsService from '@services/exams';

// export const insert = async (req: Request, res: Response): Promise<Response> => {
//   const { body }: { body: IExams } = req;
//   if (!body.category || !body.name || !body.pdf || !body.subject || !body.professor) {
//     return res.sendStatus(400);
//   }
//   try {
//     await examsService.insert(body);
//     return res.sendStatus(501);
//   } catch (err) {
//     console.error(err);
//     return res.sendStatus(500);
//   }
// };
