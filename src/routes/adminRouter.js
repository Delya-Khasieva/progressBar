import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.get('/users', async (req, res) => {
    const allUsers = await User.findAll({order: [['id', 'ASC']]});
    const initState = {allUsers}
 res.render('Layout', initState)});

export default router;
