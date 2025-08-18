import express from 'express';
const categoryRouter= express.Router();
 
import { getAllCategories, createCategory,getIdCategories } from '../controllers/categoryController.js'

// category routes
categoryRouter.get('/', getAllCategories)
categoryRouter.get('/catagory/:id', getIdCategories)
categoryRouter.post('/add_category', createCategory);  

export default categoryRouter;