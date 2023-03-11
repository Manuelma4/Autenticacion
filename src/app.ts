// En el archivo app.ts
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user';
import errorMiddleware from './middleware/error';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(errorMiddleware);

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});