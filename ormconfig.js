require('./src/setup');

module.exports = {
  type: 'postgres',
  synchronize: false,
  logging: false,
  entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.*`],
  migrations: ['./dist/migrations/*.js'],
  subscribers: ['./dist/subscribers/*.js'],
  cli: {
    entitiesDir: './dist/entities',
    migrationsDir: './src/migrations',
    subscribersDir: './dist/subscribers',
  },
};
