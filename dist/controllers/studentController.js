"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getOneDelete = exports.getAllDelete = exports.getOneStudent = exports.getAllStudent = void 0;
const studentModel_1 = require("../models/studentModel");
const getAge_1 = require("../helpers/getAge");
const getAllStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield studentModel_1.Student.findBy({ status: true });
        res.status(200).send(student);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ ok: true, message: "Estudiante no encontrado" });
        }
    }
});
exports.getAllStudent = getAllStudent;
const getOneStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = parseInt(id);
        console.log(userId);
        const student = yield studentModel_1.Student.findOneBy({ id: userId });
        res.status(200).send({ ok: true, student });
    }
    catch (error) {
        res.status(404).send({ message: "Estudiante no encontrado" });
    }
});
exports.getOneStudent = getOneStudent;
const getAllDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield studentModel_1.Student.findBy({ status: false });
        res.status(200).send({ ok: true, student });
    }
    catch (error) {
        res.status(404).send({ message: "Estudiantes no encontrado" });
    }
});
exports.getAllDelete = getAllDelete;
const getOneDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = parseInt(id);
        console.log(userId);
        const student = yield studentModel_1.Student.findOneBy({ id: userId });
        res.status(200).send({ ok: true, student });
    }
    catch (error) {
        res.status(404).send({ message: "Estudiante no encontrado" });
    }
});
exports.getOneDelete = getOneDelete;
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, dateBirth, course } = req.body;
        const age = (0, getAge_1.getAge)(dateBirth);
        if (age <= 15) {
            return res.status(400).send({
                ok: false,
                message: "El estudiante tiene que tener 16 años",
            });
        }
        else {
            const student = new studentModel_1.Student();
            student.name = name;
            student.dateBirth = dateBirth;
            student.course = course;
            yield student.save();
            res.status(201).send({
                ok: true,
                message: "Estudiante creado correctamente",
                student,
            });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send({
                message: "Comuniquese con el administrador!",
            });
        }
    }
});
exports.createStudent = createStudent;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, dateBirth, course } = req.body;
        const userId = parseInt(id);
        const student = yield studentModel_1.Student.findOneBy({ id: userId });
        if (!student) {
            return res.status(404).send({ message: "Estudiante no encontrado" });
        }
        yield studentModel_1.Student.update({ id: userId }, { name, dateBirth, course });
        return res
            .status(200)
            .send({ ok: true, message: "Estudiante actializado correctamente", student });
    }
    catch (error) {
        if (error instanceof Error) {
            return res
                .status(500)
                .json({ message: "Comuniquese con el administrador" });
        }
    }
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = parseInt(id);
        const student = yield studentModel_1.Student.findOneBy({ id: userId });
        if (!student) {
            return res.status(404).send({ message: "Estudiante no encontrado" });
        }
        yield studentModel_1.Student.update({ id: userId }, { status: false });
        return res
            .status(200)
            .send({
            ok: true,
            message: "Estudiante eliminado correctamente"
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteStudent = deleteStudent;
