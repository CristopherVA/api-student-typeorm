"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const typeorm_1 = require("typeorm");
const studentModel_1 = require("../models/studentModel");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "cris12302203Aammg",
    database: "schooldb",
    entities: [studentModel_1.Student],
    logging: true,
    synchronize: true
});
const database = () => {
    AppDataSource.initialize()
        .then(() => {
        console.log("Database connected");
    })
        .catch((err) => {
        console.log("Database connection error", err);
    });
};
exports.database = database;
