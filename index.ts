import express, {ErrorRequestHandler, Express} from 'express';
import {router} from './routes/api';

const app: Express = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());

app.use('/api', router);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
  next();
};

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
