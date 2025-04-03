import express from 'express';
import env from './configs/env.config';
import router from './routes';
import dbConfig from './configs/db.config';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Bun Express Postgres Vercel Boilerplate');
});

app.use('/api', router);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});

dbConfig
  .authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Database connection failed', err);
  });
