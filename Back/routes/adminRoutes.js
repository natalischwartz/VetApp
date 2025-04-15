import express from 'express';
import { getAllPets } from '../controllers/adminControllers.js';

const router = express.Router();

router.get('/',getAllPets);









export default router;