require('dotenv');

module.exports = {
  type: 'postgres',
  url: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  logging: false,
  entities: ['./dist/entities/*.js'],
  migrations: ['./dist/migrations/*.js'],
  subscribers: ['./dist/subscribers/*.js'],
  cli: {
    entitiesDir: './dist/entities',
    migrationsDir: './src/migrations',
    subscribersDir: './dist/subscribers',
  },
};
