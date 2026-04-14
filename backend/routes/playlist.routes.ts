import { Router } from 'express';
import {
  getPlaylist,
  addToStart,
  addToEnd,
  addAtPosition,
  removeSong,
  nextSong,
  prevSong,
  getCurrentSong
} from '../controllers/playlist.controller';

const router = Router();

router.get('/', getPlaylist);
router.get('/current', getCurrentSong);
router.post('/add-start', addToStart);
router.post('/add-end', addToEnd);
router.post('/add-position', addAtPosition);
router.delete('/:id', removeSong);
router.post('/next', nextSong);
router.post('/prev', prevSong);

export default router;