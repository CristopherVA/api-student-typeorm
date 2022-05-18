import { Request, Response } from "express";
import { Student } from "../models/studentModel";
import { getAge } from "../helpers/getAge";

export const getAllStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.findBy({ status: true });
    res.status(200).send(student);
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(404)
        .json({ ok: true, message: "Estudiante no encontrado" });
    }
  }
};

export const getOneStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);
    console.log(userId);
    const student = await Student.findOneBy({ id: userId });
    res.status(200).send({ ok: true, student });
  } catch (error) {
    res.status(404).send({ message: "Estudiante no encontrado" });
  }
};

export const getAllDelete = async (req: Request, res: Response) => {
  try {
    const student = await Student.findBy({ status: false });
    res.status(200).send({ ok: true, student });
  } catch (error) {
    res.status(404).send({ message: "Estudiantes no encontrado" });
  }
};

export const getOneDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);
    console.log(userId);
    const student = await Student.findOneBy({ id: userId });
    res.status(200).send({ ok: true, student });
  } catch (error) {
    res.status(404).send({ message: "Estudiante no encontrado" });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { name, dateBirth, course } = req.body;

    const age = getAge(dateBirth);

    if (age <= 15) {
      return res.status(400).send({
        ok: false,
        message: "El estudiante tiene que tener 16 años",
      });
    } else {
      const student = new Student();

      student.name = name;
      student.dateBirth = dateBirth;
      student.course = course;

      await student.save();

      res.status(201).send({
        ok: true,
        message: "Estudiante creado correctamente",
        student,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({
        message: "Comuniquese con el administrador!",
      });
    }
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, dateBirth, course } = req.body;
    const userId = parseInt(id);
    
    const age = getAge(dateBirth);

    const student = await Student.findOneBy({ id: userId });

    if (!student) {
      return res.status(404).send({ message: "Estudiante no encontrado" });
    }

    if (age <= 15) {
      return res.status(400).send({
        ok: false,
        message: "El estudiante tiene que tener 16 años",
      });
    } else {  
      const studentUpdate = await Student.update(
        { id: userId },
        { name, dateBirth, course }
      );

      return res.status(200).send({
        ok: true,
        message: "Estudiante actializado correctamente",
        studentUpdate,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Comuniquese con el administrador" });
    }
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);

    const student = await Student.findOneBy({ id: userId });

    if (!student) {
      return res.status(404).send({ message: "Estudiante no encontrado" });
    }

    await Student.update({ id: userId }, { status: false });

    return res.status(200).send({
      ok: true,
      message: "Estudiante eliminado correctamente",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
