import {Router} from 'express';
import controller from '../controllers/ClassesController';

const route = Router();
route.get('/:year', (req, res) => controller.getByYear(req,res));
route.get('/:id', (req, res) => controller.getById(req,res));
route.get('/', (req, res) => controller.getAll(req,res));
route.post('/', (req, res) => controller.create(req,res));

export default route;