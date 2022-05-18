import { Router } from "express";
import {
    createStudent,
    deleteStudent,
    getAllStudent,
    getOneStudent,
    updateStudent,
    getAllDelete,
    getOneDelete
} from "../controllers/studentController";

const router = Router();

router.get("/", getAllStudent);
router.get("/delete", getAllDelete);
router.get("/delete/:id", getOneDelete);
router.get("/:id", getOneStudent);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
 
export default router;
