import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});

export default app;
