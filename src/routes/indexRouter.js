import express from 'express';
import {List,Question,Answer} from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});

router.get('/signin', (req, res) => res.render('Layout'));

router.get('/lists/:listId', async (req, res) => {
    const allLists = await List.findAll({
      where: {
        id: req.params.listId
      },
      include: {
        model: Question,
        include: {
          model: Answer
        }
      }
    });
    const initState = {
      allLists
    }
    res.render('Layout', initState);
 });

export default router;
