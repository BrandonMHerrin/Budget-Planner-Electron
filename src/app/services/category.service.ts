import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getCategories() {
    return sampleCategories;
  }

  getIncomeCategories() {
    return sampleCategories.filter((c) => c.type === 'income');
  }

  getExpenseCategories() {
    return sampleCategories.filter((c) => c.type === 'expense');
  }

  getCategory(id: string) {
    return sampleCategories.find((c) => c.id === id);
  }

  insertCategory(category: any) {
    sampleCategories.push(category);
  }

  updateCategory(category: any) {
    const index = sampleCategories.findIndex((c) => c.id === category.id);
    sampleCategories[index] = category;
  }

  deleteCategory(id: string) {
    const index = sampleCategories.findIndex((c) => c.id === id);
    sampleCategories.splice(index, 1);
  }
}

// List of sample categories
const sampleCategories = [
  {
    id: '1',
    name: 'Food',
    type: 'expense',
  },
  {
    id: '2',
    name: 'Salary',
    type: 'income',
  },
  {
    id: '3',
    name: 'Rent',
    type: 'expense',
  },
  {
    id: '4',
    name: 'Travel',
    type: 'expense',
  },
  {
    id: '5',
    name: 'Groceries',
    type: 'expense',
  },
  {
    id: '6',
    name: 'Shopping',
    type: 'expense',
  },
  {
    id: '7',
    name: 'Miscellaneous',
    type: 'expense',
  },
];
