import { DataSource } from 'typeorm';
import { Student } from '../models/studentModel';

const AppDataSource = new DataSource ({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "cris12302203Aammg",
    database: "schooldb",
    entities: [Student],
    logging: true,
    synchronize: true
})

export const database = () => {
    AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Database connection error", err);
    })
}