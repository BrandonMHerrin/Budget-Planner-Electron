import { Injectable } from '@angular/core';
import { BudgetItem } from '../models/budget-item.model';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor() {}

  getBudgetItemsForThisMonth() {
    return sampleBudgetItems.filter((t) => {
      return (
        t.date.getMonth() === new Date().getMonth() &&
        t.date.getFullYear() === new Date().getFullYear()
      );
    });
  }

  getBudgetItemsForNextMonth() {
    return sampleBudgetItems.filter((t) => {
      return (
        t.date.getMonth() === new Date().getMonth() + 1 &&
        t.date.getFullYear() === new Date().getFullYear()
      );
    });
  }

  insertBudgetItem(budgetItem: BudgetItem) {
    sampleBudgetItems.push(budgetItem);
  }

  updateBudgetItem(budgetItem: BudgetItem) {
    const index = sampleBudgetItems.findIndex((t) => t.id === budgetItem.id);
    sampleBudgetItems[index] = budgetItem;
  }

  deleteBudgetItem(id: string) {
    const index = sampleBudgetItems.findIndex((t) => t.id === id);
    sampleBudgetItems.splice(index, 1);
  }
}

// List of sample budget items
const sampleBudgetItems: BudgetItem[] = [
  {
    id: '1',
    name: 'Food',
    amount: 200,
    type: 'expense',
    category: '1',
    date: new Date('2023-06-01'),
  },
  {
    id: '2',
    name: 'Salary',
    amount: 5000,
    type: 'income',
    category: '2',
    date: new Date('2023-06-02'),
  },
  {
    id: '3',
    name: 'Rent',
    amount: 1000,
    type: 'expense',
    category: '3',
    date: new Date('2023-06-03'),
  },
  {
    id: '4',
    name: 'Travel',
    amount: 200,
    type: 'expense',
    category: '4',
    date: new Date('2023-06-04'),
  },
  {
    id: '5',
    name: 'Groceries',
    amount: 200,
    type: 'expense',
    category: '5',
    date: new Date('2023-06-05'),
  },
  {
    id: '6',
    name: 'Shopping',
    amount: 200,
    type: 'expense',
    category: '6',
    date: new Date('2023-06-06'),
  },
];
