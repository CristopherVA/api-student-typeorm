"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "cris12302203Aammg",
    database: "student",
    entities: [],
    logging: true
});
const database = () => {
    AppDataSource.initialize()
        .then(() => {
        console.log("Database connected");
    })
        .catch(() => {
        console.log("Database connection error");
    });
};
exports.database = database;
