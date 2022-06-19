import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from '../interfaces/Transaction';
@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  @Input() aTransaction: Transaction = {
    id: 0,
    date: 'DD/MM/YYYY',
    comments: ''
  };
  @Output() updateComment:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    
  }

  gotoList() {
    this.updateComment.emit(this.aTransaction);
  }

  updateForm() {
    alert('Successfully updated record.');
    this.gotoList();
  }
}
