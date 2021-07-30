export default {
  type: 'postgres',
  url: process.env.TYPEORM_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['dist/entities/*.js'],
  migrations: ['dist/migrations/*.js'],
  subscribers: ['dist/subscriber/*.js'],
  cli: {
    entitiesDir: './dist/entities/*.js',
    migrationsDir: './src/migrations',
    subscribersDir: 'dist/subscriber',
  },
};
