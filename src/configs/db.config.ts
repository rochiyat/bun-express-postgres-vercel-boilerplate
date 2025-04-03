import env from './env.config';
import { Sequelize } from 'sequelize';

const dbConfig = new Sequelize(env.DATABASE_URL ?? '', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

export default dbConfig;
