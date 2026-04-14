import { Router } from 'express';
import { searchMusic, getMusicById } from '../controllers/music.controller';

const router = Router();

router.get('/search', searchMusic);
router.get('/:id', getMusicById);

export default router;