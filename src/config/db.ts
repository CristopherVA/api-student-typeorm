import { DataSource } from 'typeorm';
import { Student } from '../models/studentModel';

const AppDataSource = new DataSource ({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "YOUR_USERNAME",
    password: "YOU_PASSWORD",
    database: "YOUR_DATABASE",
    entities: [Student],
    logging: true,
    synchronize: true,
    ssl: true
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