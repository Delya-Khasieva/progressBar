import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/signin', (req, res) => res.render('Layout'));

export default router;
