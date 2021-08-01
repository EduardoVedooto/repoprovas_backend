import { IExams } from '@interface/Exams';
import Joi from 'joi';

const examsSchema = (data: IExams): Joi.ValidationResult => {
  return Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    subject: Joi.string().required(),
    pdf: Joi.string().required(),
    professor: Joi.string().required(),
  }).validate(data);
};

export default examsSchema;
