import * as express from 'express';
import classeRouter from './Classes';
const router = express.Router();

router.use('/classes', classeRouter);

export default router;