import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Produto } from "./entity/Produto"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "silly.db.elephantsql.com",
    port: 5432,
    
    username: "xbytgvth",
    password: "y48FVrV9ne1d14Z4LKWy1_XGNriONUgW",
    database: "xbytgvth",
    synchronize: true,
    logging: false,
    entities: [User, Produto],
    migrations: [],
    subscribers: [],
})
