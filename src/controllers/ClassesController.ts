import { Request, Response } from 'express';
import Service from '../services/ClasseService';

class ClasseController {
  private service: Service;
  constructor(service: Service) {
    this.service = service;
  }
  async getAll(_request: Request, response: Response) {
    return response.status(200).json(await this.service.getAll());
  }
  async getById(request: Request, response: Response) {
    const { id } = request.params;
    return response.status(200).json(await this.service.findById(+id));
  }
  async create(request: Request, response: Response) {
    const props = request.body;
    await this.service.create(props);
    return response.status(201).json({message:'created sucessfuly'})
  }
  async getByYear(request: Request, response:Response) {
    const {year} =request.params;
    return response.status(200).json(await this.service.getClassesByYear(+year));
  }
}

export default new ClasseController(new Service());