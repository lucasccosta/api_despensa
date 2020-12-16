import { Router } from 'express';
import alimentosController from '../controllers/alimentos.controller'

const alimentosRoute = Router();

alimentosRoute.post('', alimentosController.post)
alimentosRoute.get('/:id', alimentosController.get)
alimentosRoute.get('/', alimentosController.getFiltered)
alimentosRoute.put('/:id', alimentosController.put);
alimentosRoute.delete('/:id', alimentosController.delete);

export default alimentosRoute;