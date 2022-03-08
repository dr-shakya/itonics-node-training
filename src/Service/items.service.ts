import { mockItems } from '../Mock/mockItems';

// Get all items
export const findAll = async () => {
  return Promise.resolve(mockItems);
};

// Get item by provided ID
export const findById = async (id: number) => {
  const item = mockItems.find((mockItem) => mockItem.id === id);
  return Promise.resolve(item);
};

// TODO Create new functions: add, update and delete
// add data
export const newDatas = async() =>{
 let newData = {
   id: req.params.id,
   title: req.body.title,
   body: req.body.body,
 };
 mockItems.push(newData);
  return promise.resolve(newData);
}

export const editData = async(id: number) =>{
  if(mockItems[id])
  {
    mockItems[id].title = req.body.title;
    mockItems[id].body = req.body.body;
    return Promise.resolve(mockItems);
  }
}
export const deleteData = async(id: number) =>{
if(mockItems[id]){
  mockItems.filter((item)=>item!=mockItems[id])
}

}
