import env from './EnvConfig';

const dbConfig = {
  dialect: 'postgres',
  host: env.DATABASE_URL,
};

export default dbConfig;
