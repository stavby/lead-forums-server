import express, { Router } from 'express';
import { app } from '../server';

app.set('PORT', process.env.PORT || 8000);

export const commentsRouter: Router = express.Router()

commentsRouter.get('/', (req, res) => {
    res.send("comments");
})
