import { Item } from '../Contract/item';
import { mockItems } from '../Mock/mockData';

// Get all items
export const findAll = async (): Promise<Array<Item>> => {
  return Promise.resolve(mockItems);
};

// Get item by provided ID
export const findById = async (id: number): Promise<Item | undefined> => {
  const item = mockItems.find((mockItem) => mockItem.id === id);
  return Promise.resolve(item);
};

export const add = async (item: Item): Promise<Item | undefined> => {
  const id = Date.now();
  const createdItem = { ...item, id };
  mockItems.push(createdItem);
  return Promise.resolve(createdItem);
};

export const update = async (id: number, item: Item): Promise<Item | undefined> => {
  const existingItem = mockItems.find((mockItem) => mockItem.id === id);
  if (!existingItem) {
    return Promise.resolve(existingItem);
  }
  const updatedItem = { ...existingItem, ...item };
  return Promise.resolve(updatedItem);
};
