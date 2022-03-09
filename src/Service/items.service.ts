import { Items } from '../Contract/items';
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

export const add = async (item: Items) => {
  const id = Date.now();
  const createdItem = { ...item, id };
  mockItems.push(createdItem);
  return Promise.resolve(createdItem);
};

export const update = async (id: number, item: Items) => {
  const existingItem = mockItems.find((mockItem) => mockItem.id === id);
  if (!existingItem) {
    return Promise.resolve(existingItem);
  }
  const updatedItem = { ...existingItem, ...item };
  return Promise.resolve(updatedItem);
};
