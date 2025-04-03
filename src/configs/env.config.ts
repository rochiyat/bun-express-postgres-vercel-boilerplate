const development = {
  NODE_ENV: 'development',
  PORT: process.env.PORT_DEV,
  DATABASE_URL: process.env.DATABASE_URL_DEV,
};

const production = {
  NODE_ENV: 'production',
  PORT: process.env.PORT_PROD,
  DATABASE_URL: process.env.DATABASE_URL_PROD,
};

const env = process.env.NODE_ENV === 'development' ? development : production;

export default env;
