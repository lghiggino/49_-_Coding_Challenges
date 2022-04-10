import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Cnab from '../models/Cnab';
import CnabService from '../services/cnabService';
import CnabRepository from '../repositories/CnabRepository';

const cnabRouter = Router();
const cnabService = new CnabService();

cnabRouter.post('/cnab', async (request, response) => {
    try {
        // const repo = getRepository(Cnab);
        const splitBody = cnabService.rowSplit(request.body);
        const parsedOne = cnabService.parse(splitBody[0]);
        const savedOne = await cnabService.createOne(parsedOne);
        return savedOne;

        // const res = await repo.save(parsedBody);
        //     return response.status(201).json(res);
    } catch (err) {
        console.log('err.message :>> ', err.message as string);
        return response.status(400).json(err.message);
    }
});

/**
 * public async createAll(parsedDiretoria: Diretoria[]): Promise<Diretoria[]> {
        return await Promise.all(parsedDiretoria.map(diretoria => this.create(diretoria)))
    }

    public async create(diretoriaCreationParams: Diretoria): Promise<Diretoria> {
        const createdDiretoria = await diretoriaRepository.create(diretoriaCreationParams)
        return createdDiretoria
    }
 */

cnabRouter.get('/', async (request, response) => {
    response.json(await getRepository(Cnab).find());
});

cnabRouter.get('/:name', async (request, response) => {
    const repository = getCustomRepository(CnabRepository);
    const res = await repository.findByName(request.params.name);
    response.json(res);
});

export default cnabRouter;
