import express from 'express';
const locationRouter= express.Router();
 
import { getLocationPages, getLocationPageById, createLocationPage, updateLocationPage, deleteLocationPage, getLocationPageBySlug } from '../controllers/locationController.js'; 
  
locationRouter.get('/', getLocationPages)
locationRouter.get('/:id', getLocationPageById)
locationRouter.get('/url/:slug', getLocationPageBySlug)
locationRouter.post('/create', createLocationPage)
locationRouter.put('/:id', updateLocationPage)
locationRouter.delete('/:id', deleteLocationPage)

export default locationRouter;