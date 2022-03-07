import { Router, Request, Response } from "express";
import { DataSetName } from "../Interfaces/DataSetName";
import Repository from "../Service/Repository";
const router = Router();

const studentRepository = new Repository(DataSetName.STUDENT);
router.get("/", async (req: Request, res: Response) => {
  try {
    const students = await studentRepository.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).send("Cannot Find Students");
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const student = await studentRepository.findById(+id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).send("Cannot Find Student");
  }
});

router.post("/", async (req: Request, res: Response) => {
  const student = req.body;
  console.log(student);
  try {
    const newstudent = await studentRepository.create(student);
    res.status(201).json(newstudent);
  } catch (error) {
    res.status(500).send("Internal Error");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const student = await studentRepository.delete(+id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).send("Cannot Find Student");
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const student = req.body;
  const studentId = req.params.id;
  console.log(student);
  try {
    const newStudent = await studentRepository.update(+studentId, student);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).send("Cannot find Student");
  }
});

export default router;
