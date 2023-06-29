import express from 'express';

const router = express.Router();

router.get('/users', (req, res) => res.render('Layout'));

router.get('/lists', (req, res) => res.render('Layout'));

router.get('/lists/my', (req, res) => res.render('Layout'));

export default router;
