"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const studentRoute_1 = __importDefault(require("./routes/studentRoute"));
// Connection to datebase
(0, db_1.database)();
// Route
app_1.default.use('/student', studentRoute_1.default);
// Server Start 
app_1.default.listen(8000, () => {
    console.log('Server started on port 8000');
});
