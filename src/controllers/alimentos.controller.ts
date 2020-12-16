import { Request, Response } from 'express';
import alimentosModel from '../models/alimentos.model';
import alimentosRoute from '../routes/alimentos.route'

class AlimentosController {

  public async post(req: Request , res: Response): Promise<Response>{
    try{
      const body = req.body
      const alimentos = await alimentosModel.create(body)
      return res.json(alimentos)
    } catch (error) {
      console.log(error);
      res.status(400).json(error)
    }

    }

  public async get(req: Request , res: Response): Promise<void>{
    const { id } = req.params;
    const alimentos = await alimentosModel.findById(id)
    // res.json(alimentos) testando a debaixo
    res.json({ message: alimentos})
  }

  public async getFiltered(req: Request , res: Response): Promise<void>{
    const body = req.body;
    const alimentos = await alimentosModel.find(body)
    res.json(alimentos)
  }

  public async put(req: Request , res: Response): Promise<void>{
    const { id } = req.params;
    const body = req.body;
    const alimentos = await alimentosModel.findByIdAndUpdate(id, req.body, { new: true })
    res.json(alimentos)
  }

  public async delete(req: Request , res: Response): Promise<void>{
    const { id } = req.params;
    const alimentos = await alimentosModel.findByIdAndDelete(id)
    res.json({ msg: 'Esse alimento foi deletado'})
  }


}


export default new AlimentosController;