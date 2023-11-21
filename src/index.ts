import 'reflect-metadata';
import express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';
import { AppDataSource } from './data-source';
import cors from "cors";



AppDataSource.initialize().then(async () => {
    const app = express()

    app.use(cors());
    app.use(bodyParser.json());
    app.use(routes);
    app.listen(3333);
})

