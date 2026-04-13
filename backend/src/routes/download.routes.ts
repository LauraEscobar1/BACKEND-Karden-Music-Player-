import { Router } from 'express';
import { downloadMusic } from '../controllers/download.controller';

const router = Router();

router.post('/', downloadMusic);

export default router;