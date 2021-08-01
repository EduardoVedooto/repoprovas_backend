import 'reflect-metadata';
import './setup';
import database from './database/database';

const port = process.env.PORT || 4000;

database.connect().then(async () => {
  const { app } = await import('src/app');
  app.listen(port, () => console.info(`Server running on port ${port}\n${process.env.DB_URL}`));
});
