import express from 'express';
import { List, User } from '../../db/models';

const router = express.Router();

router.get('/my', (req, res) => res.render('Layout'));

router.get('/process/all', async (req, res) => {
  const allListsProcess = await List.findAll({
    include: {
      model: User,
      attributes: ['name'],
    },
    order: [['id', 'ASC']],
  });
  const initState = { allListsProcess };
  res.render('Layout', initState);
});

router.get('/process', async (req, res) => {
  const myLists = await List.findAll({
    where: {
      user_id: req.session.user.id,
    },
    include: {
      model: User,
      attributes: ['name'],
    },
    order: [['id', 'ASC']],
  });
  console.log(myLists);
  const initState = { myLists };
  res.render('Layout', initState);
});

router.get('/:id', (req, res) => res.render('Layout'));

router.get('/:id/questions', (req, res) => res.render('Layout'));

export default router;
