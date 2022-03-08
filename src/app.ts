import express, { Express, Request, Response } from 'express';
import { Items } from './Contract/items';
import { findAll, findById, newDatas, editData, delete } from './Service/items.service';
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
app.post('/items', async(req: Request, res: Response)=>{
 try{
  const data = await newDatas();
   res.status(200).json(data);
 }catch(err){ res.status(500).json({message: err.message}}


})

// PUT /items/:id
 app.put('/items/:id', (req: Request, res: Response)=>{
 const id: number = Number(req.params.id);
 
    const editedData = await editData(id);\
    if(!editedData){
      res.status(500).json({"message": "Cannot be edited"})
    }else
    {
      res.status(200).json(editedData);
    }
  
 
 })

// DELETE /items

// DELETE /items/:id
  app.delete('items/:id', (req: Request, res: Response)=>{
  const id = Number(req.params.id);
   delete(id)
  
  })

// Start server
app.listen(port, () => {
  console.log('Listening on port:', port);
});
