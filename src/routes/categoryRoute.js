import express from 'express';
import { getCategories, createCategory,createCategoryWithDishes } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/', createCategory);
router.post('/with-dishes', createCategoryWithDishes);

export default router;
