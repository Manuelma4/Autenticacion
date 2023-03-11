// En el archivo routes/user.ts
import express from 'express';
import User from '../models/User';
import { Router } from 'express';
import { createUser, loginUser, logoutUser, changePassword } from '../controllers/user';
import auth from '../middleware/auth';

const router = Router();

router.post('/users', createUser);
router.post('/users/login', loginUser);
router.post('/users/logout', auth, logoutUser);
router.patch('/users/me/password', auth, changePassword);

export default router;
