import '../setup';

import { createConnection, getConnection } from 'typeorm';

if (process.env.NODE_ENV === 'production' && process.env.DB_URL.indexOf('sslmode=require') === -1) {
  process.env.DB_URL += '?sslmode=require';
}

const connectionName = 'default';

const database = {
  async connect(): Promise<void> {
    await createConnection({
      name: connectionName,
      type: 'postgres',
      url: process.env.DB_URL,
      entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.*`],
      ssl: process.env.NODE_ENV === 'production',
    });
  },

  async disconnect(): Promise<void> {
    await getConnection(connectionName).close();
  },
};

export default database;
