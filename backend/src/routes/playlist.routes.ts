import { Router } from 'express';
import {
  getPlaylist,
  addToPlaylist,
  removeFromPlaylist,
} from '../controllers/playlist.controller';

const router = Router();

router.get('/', getPlaylist);
router.post('/', addToPlaylist);
router.delete('/:id', removeFromPlaylist);

export default router;