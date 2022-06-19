import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { storedTransactions } from '../dummyData/mock-transaction-data';
import { Transaction } from '../interfaces/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  loadTransactions(): Observable<Transaction[]> {
    return of(storedTransactions);
  }
}
