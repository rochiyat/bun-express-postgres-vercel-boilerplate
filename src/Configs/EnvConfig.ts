const development = {
  NODE_ENV: 'development',
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};

const production = {
  NODE_ENV: 'production',
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};

const env = process.env.NODE_ENV === 'development' ? development : production;

export default env;
