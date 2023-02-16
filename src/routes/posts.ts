import { PrismaClient } from '@prisma/client';
import express, { Request, Response, Router } from 'express';

const prisma = new PrismaClient();
export const postsRouter: Router = express.Router();

postsRouter.get('/', async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.send(posts);
});

postsRouter.get('/byTopic', async (req: Request, res: Response) => {
  if (!req.query.topic) {
    res.status(400).send('topic parameter is missing');
    return;
  }
  const topidId = parseInt(req.query.topic as string);

  const posts = await prisma.post.findMany({
    where: { topic_id: topidId },
    include: { user: { select: { user_id: true, picture: true } } },
  });
  res.send(posts);
});

postsRouter.post('/', async (req: Request, res: Response) => {
  const post = req.body;

  try {
    await prisma.post.create({ data: post });
    res.status(200).send('success');
  } catch (e) {
    res.status(500).send(e);
  }
});
