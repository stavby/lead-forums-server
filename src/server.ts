import express, { Express, Request, Response } from 'express';
import { postsRouter } from './routes/posts';
import { usersRouter } from './routes/users';
import { topicsRouter } from './routes/topics';
import cors from 'cors';
import bodyParser from 'body-parser';

export const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.set('PORT', process.env.PORT || 8000);

app.get('/', (req: Request, res: Response) => {
  res.send('Get!!!');
});

// app.use('/comments', commentsRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);
app.use('/topics', topicsRouter);

app.listen(app.get('PORT'), () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${app.get('PORT')}`);
});
