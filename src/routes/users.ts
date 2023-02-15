import { PrismaClient } from '@prisma/client';
import express, { query, Request, Response, Router } from 'express';

const prisma = new PrismaClient();
export const usersRouter: Router = express.Router();

usersRouter.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({});
  res.send(users);
});

usersRouter.put('/login', async (req: Request, res: Response) => {
  const user = { user_mail: req.body.email, picture: req.body.picture, display_name: req.body.name };

  const user_exists = await prisma.user.findFirst({ where: { user_mail: user.user_mail } });

  let userFromDb = user_exists;
  if (!user_exists) {
    userFromDb = await prisma.user.create({ data: user });
  }

  res.json(userFromDb?.user_id);
});
