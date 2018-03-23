import express from 'express';

import tool from './tool'

let router = express.Router();

router.use('/tool', tool);

export default router;