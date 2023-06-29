import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.render('Layout'));

router.get('/my', (req, res) => res.render('Layout'));

router.get('/process/all', (req, res) => res.render('Layout'));

router.get('/process/:id', (req, res) => res.render('Layout'));

router.get('/:id', (req, res) => res.render('Layout'));

router.get('/:id/questions', (req, res) => res.render('Layout'));



export default router;