import express from 'express';
export const router = express();

import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

router.get('/movies', async (_req, res, _next) => {
  // get placeholder
  const movies = await prisma.movie.findMany();
  console.log(movies);
  // res.send(`List all users:`);
  res.send(movies);
});

router.post('/movies', async (req, res, _next) => {
  // post placeholder
  console.log(req.body);
  const {title, content, watched, watcherId} = req.body;
  if (!watcherId || !title) {
    console.log('error');
    res.send('Improper body');
    return;
  }
  const watcher = await prisma.user.update({
    where: {id: watcherId},
    data: {
      movies: {
        create: {
          title,
          content,
          watched,
        },
      },
    },
    include: {
      movies: true,
    },
  });
  console.log(watcher);
  res.send(watcher.movies);
});

router.get('/movies/:id', async (req, res, _next) => {
  const movie = await prisma.movie.findUnique({
    where: {id: +req.params.id},
  });
  console.log(movie);
  res.send(movie);
});

router.delete('/movies/:id', async (req, res, _next) => {
  // delete placeholder
  console.log(req.body);
  const movie = await prisma.movie.delete({
    where: {
      id: +req.params.id,
    },
  });
  console.log(movie);
  res.send(movie);
});
