import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Transaction } from '../interfaces/Transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transSubscription$: Subscription = new Subscription();
  transacList: Transaction[] = [];
  showDetail: boolean = false;
  selectedTransaction: Transaction = {
    id: 0,
    date: '',
    comments: ''
  };

  constructor(private _transacService: TransactionService) { }

  ngOnInit(): void {
    this.transSubscription$ = this._transacService.loadTransactions().subscribe((data)=>{
      this.transacList = data;
    });
  }

  gotoDetailPage(tran: Transaction) {
    this.selectedTransaction=Object.assign({},tran);
    this.showDetail = true;
  }

  updateCom(newComObj: any) {
    var selTran: any = this.transacList.find(t => t.id==newComObj.id);
    Object.assign(selTran,newComObj)
    this.showDetail = false;
  }
}
