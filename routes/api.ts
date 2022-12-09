import express from 'express';
import {PrismaClient} from '@prisma/client';

export const router = express.Router();
const prisma = new PrismaClient();

router.get('/movies', async (_req, res, _next) => {
  // get placeholder
  const users = await prisma.user.findMany();
  console.log(users);
  // res.send(`List all users:`);
  res.send(users);
});

router.post('/movies', async (req, res, _next) => {
  // post placeholder
  console.log(req.body);
  const user = await prisma.user.create(req.body);
  console.log(user);
  res.send('Welcome..');
});

router.delete('/movies/:id', async (req, res, _next) => {
  // delete placeholder
  const user = await prisma.user.delete({where: {id: req.body}});
  console.log(user);
  res.send(`Deleted user:\n${user}`);
});
