import express from 'express';
import bcrypt from 'bcrypt';
import { List, Question, Answer, User } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});

router.get('/signin', (req, res) => {
   res.render('Layout')
});

router.get('/lists/lists/:listId', async (req, res) => {
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
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');

});

router.get('/signin', (req, res) => res.render('Layout'));

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, isAdmin = false } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: 'Не ввели имя, email или пароль' });

    const hashPass = await bcrypt.hash(password, 5);
    const [newUser, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { name, email, password: hashPass, isAdmin },
    });

    if (!isCreated) {
      return res.status(400).json({ message: 'Email уже зарегистрирован' });
    }
    delete newUser.dataValues.password;

    req.session.user = newUser;
    res.json(newUser);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

export default router;
