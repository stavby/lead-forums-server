import { PrismaClient } from '@prisma/client'
import express, { Request, Response, Router } from 'express';

const prisma = new PrismaClient()
export const topicsRouter: Router = express.Router() 

topicsRouter.get('/', async (req: Request, res: Response) => {
    const topics = await prisma.topics.findMany();
    res.send(topics)
})