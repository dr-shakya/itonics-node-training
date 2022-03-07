import { Router, Request, Response } from "express";
import { DataSetName } from "../Interfaces/DataSetName";
import Repository from "../Service/Repository";
const router = Router();

const itemRepository = new Repository(DataSetName.ITEM);
router.get("/", async (req: Request, res: Response) => {
  try {
    const items = await itemRepository.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send("Internal Error");
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const item = await itemRepository.findById(+id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).send("Cannot Find Item");
  }
});

router.post("/", async (req: Request, res: Response) => {
  const item = req.body;
  try {
    const newItem = await itemRepository.create(item);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).send("Internal Error");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const item = await itemRepository.delete(+id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).send("Cannot Find Item");
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const item = req.body;
  const itemId = req.params.id;
  console.log(item);
  try {
    const newItem = await itemRepository.update(+itemId, item);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).send("Cannot find Item");
  }
});

export default router;
