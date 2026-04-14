import { Router } from 'express';
import { streamMusic } from '../controllers/stream.controller';

const router = Router();

router.get('/:id', streamMusic);

export default router;