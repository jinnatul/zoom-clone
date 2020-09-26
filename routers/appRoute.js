import express from 'express';
import { v4 as uuidV4 } from 'uuid';
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`);
});

router.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room });
});

export default router;