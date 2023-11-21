import { AppDataSource } from "../data-source";

import { Produto } from '../entity/Produto';
import { Request, Response } from "express";
const repository = AppDataSource.getRepository(Produto);

export const getProduto = async (request: Request, response: Response) => {
    const produto = await repository.find();
    return response.json(produto);
};


export const setProduto = async (request: Request, response: Response) => {
    const produto = await repository.save(request.body);
    return response.json(produto);
};

export const updateProduto = async (request: Request, response: Response) => {
    const { id } = request.params
    const produto = await repository.update(id, request.body);

    if (produto.affected == 1) {
        const produtoUpdated = await repository.findOneBy({ id: parseInt(id) });
        return response.json(produtoUpdated);
    }
    else {
        return response.status(404).json({ message: 'Produto não encontrado!' })
    }
};

export const deleteProduto = async (request: Request, response: Response) => {
    const { id } = request.params
    const produto = await repository.delete(id);


    if (produto.affected == 1) {
        return response.status(200).json({ message: "Produto excluído com sucesso!" });
    }
    else {
        return response.status(404).json({ message: 'Produto não encontrado!' })
    }
};