import { DataSetName } from "../Interfaces/DataSetName";
import { Item } from "../Interfaces/Item";
import { Student } from "../Interfaces/Student";
import { mockItems as items } from "../Mock/items";
import { students } from "../Mock/students";
export default class Repository {
  dataSet: Array<Student | Item>;
  constructor(private datasetName: DataSetName) {
    this.dataSet = this.getDataSet();
  }
  getDataSet() {
    switch (this.datasetName) {
      case DataSetName.STUDENT:
        return students;
      case DataSetName.ITEM:
        return items;
    }
  }
  async findAll() {
    return Promise.resolve(this.dataSet);
  }

  // Get item by provided ID
  async findById(id: number) {
    const item = this.dataSet.find((item) => item.id === id);
    if (item) {
      return Promise.resolve(item);
    } else {
      return Promise.reject("Cannot Find Item");
    }
  }
  async delete(id: number) {
    this.dataSet = this.dataSet.filter((item) => item.id !== id);
    return Promise.resolve(this.dataSet);
  }
  async create(data: any) {
    data = {
      id: this.dataSet.length + 1,
      ...data,
    };
    this.dataSet.push(data);
    return Promise.resolve(this.dataSet);
  }
  async update(id: number, data: any) {
    const keys = Object.keys(data);
    let item: any = this.dataSet.find((item) => item.id === id);
    if (item) {
      keys.map((key) => {
        item[key] = data[key];
      });
      return Promise.resolve(item);
    } else {
      return Promise.reject("Cannot Find Item");
    }
  }
}
