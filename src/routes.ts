import { Router, request, response, Request, Response } from 'express'
import { deleteProduto, getProduto, setProduto, updateProduto } from './controller/ProdutoController';
const routes = Router();

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'hello, e vai tomar no cc!' })
});

routes.get('/seila', (request: Request, response: Response) => {
    return response.json({ message: 'sim gostosa!!' })
});

routes.get('/produto', getProduto);
routes.post('/produto', setProduto);
routes.put('/produto/:id', updateProduto);
routes.delete('/produto/:id', deleteProduto);

export default routes;