import express, { Express } from 'express';
import { commentsRouter } from './routes/comments';

export const app: Express = express();

app.set('PORT', process.env.PORT || 8000);

app.get('/', (req, res) => {
  res.send('Get!!!');
})

app.use('/comments', commentsRouter);

app.listen(app.get('PORT'), () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});