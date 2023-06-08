import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor() {}

  getCurrentMonthTransactions() {
    return sampleTransactions.filter((t) => {
      return (
        t.date.getMonth() === new Date().getMonth() &&
        t.date.getFullYear() === new Date().getFullYear()
      );
    });
  }

  insertTransaction(transaction: any) {
    sampleTransactions.push(transaction);
  }

  updateTransaction(transaction: any) {
    const index = sampleTransactions.findIndex((t) => t.id === transaction.id);
    sampleTransactions[index] = transaction;
  }

  deleteTransaction(id: string) {
    const index = sampleTransactions.findIndex((t) => t.id === id);
    sampleTransactions.splice(index, 1);
  }
}

// List of sample transactions
const sampleTransactions = [
  {
    id: '1',
    title: 'Salary',
    amount: 5000,
    category: '2',
    date: new Date('2023-06-01'),
  },
  {
    id: '2',
    title: 'Rent',
    amount: 1000,
    category: '3',
    date: new Date('2023-06-02'),
  },
  {
    id: '3',
    title: 'Groceries',
    amount: 200,
    category: '5',
    date: new Date('2023-06-03'),
  },
  {
    id: '4',
    title: 'Food',
    amount: 100,
    category: '1',
    date: new Date('2023-06-04'),
  },
  {
    id: '5',
    title: 'Shopping',
    amount: 300,
    category: '6',
    date: new Date('2023-06-05'),
  },
  {
    id: '6',
    title: 'Travel',
    amount: 200,
    category: '4',
    date: new Date('2023-06-06'),
  },
];
