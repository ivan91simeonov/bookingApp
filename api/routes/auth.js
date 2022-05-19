import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello this is auth endpoint');
});

router.get('/register', (req, res) => {
    res.send('This is register endpoint');
  });

export default router;
