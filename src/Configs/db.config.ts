import env from './env.config';

const dbConfig = {
  dialect: 'postgres',
  host: env.DATABASE_URL,
};

export default dbConfig;
