import express, { Request, Response } from 'express';
import { Items } from '../Contract/items';
import { add, findAll, findById, update } from '../Service/items.service';

const itemsRouter = express.Router();

// GET /items
itemsRouter.get('', async (req: Request, res: Response) => {
  try {
    const items: Array<Items> = await findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send('Internal Error');
  }
});

// GET items/:id
itemsRouter.get('/:id', async (req: Request, res: Response) => {
  // Get the param from the path
  const id: number = Number(req.params.id);
  try {
    // Fetch the item
    const item = await findById(id);
    if (!item) {
      res.status(404).send('Item not found');
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).send('Internal Error');
  }
});

// POST /items
itemsRouter.post('', async (req: Request, res: Response) => {
  const item = req.body;
  try {
    const result = await add(item);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send('Internal Error');
  }
});

// PUT /items/:id
itemsRouter.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const item = req.body;
  try {
    const result = await update(id, item);
    if (!result) {
      res.status(404).send('Item Not Found');
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send('Internal Error');
  }
});

export default itemsRouter;
