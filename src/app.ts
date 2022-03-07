import express, { Express, Request, Response } from 'express';
import { Items } from './Contract/items';
import { findAll, findById } from './Service/items.service';
import { students } from './students';
const app: Express = express();

const port = process.env.PORT || 8000;

app.get('/students', (req: Request, res: Response) => {
  res.status(200).json(students);
});

// ITEMS Endpoint

// GET /items
app.get('/items', async (req: Request, res: Response) => {
  try {
    const items: Array<Items> = await findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send('Internal Error');
  }
});

// GET items/:id
app.get('/items/:id', async (req: Request, res: Response) => {
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

// PUT /items/:id

// DELETE /items

// DELETE /items/:id

// Start server
app.listen(port, () => {
  console.log('Listening on port:', port);
});
