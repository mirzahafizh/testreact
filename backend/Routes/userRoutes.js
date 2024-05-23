import express from 'express';
import { createUser, getUser, getUserByID } from '../controller/userController.js';

const router = express.Router();

router.get('/users',getUser);
router.get('/users/:id',getUserByID);
router.post('/users',createUser);


export default router