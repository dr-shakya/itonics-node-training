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
export const newDatas = async(item: Items) =>{
  mockItems.push(item);
  return Promise.resolve(mockItems);
}

export const editData = async(id: number, item: Items) =>{
  existingItem = mockItems.find((item)=> item.id === id);
  if(existingItem)
  {
    existingItem.id = item.id;
    existingItem.title = item.title;
    existingItem.body = item.body;
    return Promise.resolve(existingItem);
  }
}
export const deleteData = async(id: number) =>{
  existingItem = mockItems.find((item)=> item.id === id);
  if(existingItem)
  {
    const mock = mockItems.filter((item)=>item.id != existingItem.id)
    return Promise.resolve(mock);
  }


}
